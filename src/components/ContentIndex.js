import "../assets/fonts/Alfa_Slab_One.css";
import "../assets/fonts/Roboto.css";
import "../assets/fonts/staatliches.css";
import "../assets/fonts/Barlow.css";
import "../assets/fonts/HammersmithOne.css";
import MicrophoneIndex from "../assets/img/MicrophoneIndex";
import MixingTableIndex from "../assets/img/MixingTableIndex";
import PlayButtonIndex from "../assets/img/PlayButtonIndex";
import SemiOvalIndex from "../assets/img/SemiOvalIndex";
import SemiOvalIndexDown from "../assets/img/SemiOvalIndexDown";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import {
  getCountArtistas,
  getCountProyectos,
} from "../services/counters.service";

const ContentIndex = () => {
  const [countArtistas, setCountArtistas] = useState("");
  const [countProyectos, setCountProyectos] = useState("");

  const getNumeroArtistas = useCallback(async () => {
    const response = await getCountArtistas();

    setCountArtistas(response.total_artistas);
  }, []);

  useEffect(() => {
    getNumeroArtistas();
  }, [getNumeroArtistas]);

  const getNumeroProyectos = useCallback(async () => {
    const response = await getCountProyectos();
    setCountProyectos(response.total_proyectos);
  }, []);

  useEffect(() => {
    getNumeroProyectos();
  }, [getNumeroProyectos]);

  return (
    <>
      <section className="s1">
        <div className="containerMainPhrase">
          <p id="MainPhrase">El mundo necesita más artistas</p>
          <p id="specifyMainPhrase">
            Cientos de músicos y empresas de la región se reúnen para crear
            valiosas obras de arte en HighPass, la plataforma por excelencia
            para el surgimiento de todo músico.
          </p>
        </div>
        <div className="containerRepresentationAndInputRegister">
          <div className="containerImagesMusicalRepresentation">
            <div className="imageMusicalRepresentation">
              <MicrophoneIndex />
            </div>
            <div className="imageMusicalRepresentation">
              <MixingTableIndex />
            </div>
            <div className="imageMusicalRepresentation">
              <PlayButtonIndex />
            </div>
          </div>
          <div className="containerInputRegisterIndex">
            <input
              id="inputRegisterIndex"
              autoComplete="off"
              placeholder="Email"
            ></input>
            <Link to="/register" id="buttonGoToRegisterForm">
              Registrarse en High Pass
            </Link>
          </div>
        </div>
      </section>
      <div className="containerWhyHighPass">
        <div className="ovalUp">
          <SemiOvalIndex />
        </div>
        <div className="containerContentWhyHighPass">
          <div className="containerTitleWhyHighPass">
            <p id="titleWhyHighPass">¿Porque High Pass?</p>
          </div>
          <div id="containerCounter">
            <div>
              <p className="titleCounterStyle">Artistas</p>
              <p className="counterNumber">{countArtistas}</p>
            </div>
            <div>
              <p className="titleCounterStyle">Empresas</p>
              <p className="counterNumber">0</p>
            </div>
            <div>
              <p className="titleCounterStyle">Proyectos</p>
              <p className="counterNumber">{countProyectos}</p>
            </div>
          </div>
          <div className="containerFooterWhyHighPass">
            <p id="textFooterWhyHighPass">
              la calidad que buscas en pocos pasos
            </p>
          </div>
        </div>
        <div className="ovalDown">
          <SemiOvalIndexDown />
        </div>
      </div>
    </>
  );
};

export default ContentIndex;
