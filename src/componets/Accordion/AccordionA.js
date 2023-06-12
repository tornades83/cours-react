import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import i18n from "../../i18n/config";
import { Link } from "react-router-dom";
import useFetch from "../useCustoms/useFetch";
import { useSelector, useDispatch } from "react-redux";
import { getDarkMode, setDarkMode  } from "../../redux/slices/darkmode.slice"


const AccordionA = () => {
  const [activeFooter, setActiveFooter] = useState(false);

  const dispatch = useDispatch()
  const GETDARKMODE = useSelector(getDarkMode)

  const { data, loading, error } = useFetch(
    "https://crud-webscoll-98c465.appdrag.site/api/get-articleblog"
  );

  console.log("data", data);

  const [language, setLanguage] = useState(i18n.language);
  useEffect(() => {
    const handleChangeLanguage = () => {
      // La langue a changé, faites quelque chose ici...
      console.log("La langue a changé ! Nouvelle langue :", i18n.language);
      setLanguage(i18n.language);
    };

    i18n.on("languageChanged", handleChangeLanguage);

    // Nettoyage : supprime l'écouteur d'événement lorsque le composant est démonté
    return () => {
      i18n.off("languageChanged", handleChangeLanguage);
    };
  }, [i18n]);

  useEffect(() => {
    console.log("language",language)
  }, [language]);

  const HandleFooter = () => {
    setActiveFooter(!activeFooter);
  };

  return (
    <>
      <Accordion bg="info" variant="info" defaultActiveKey="0">
        {data?.map((item, index) => (
          <Accordion.Item key={index} eventKey={index}>
            <Accordion.Header>
              {language === "fr" ? item.title : item.titleEn }
            </Accordion.Header>
            <Accordion.Body>
            {language === "fr" ? item.article.slice(0, 100) : item.articleEn?.slice(0, 100) }
              <img src={item.image} className="img-fluid" alt="" />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default AccordionA;
