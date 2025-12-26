import React, { useRef, useState } from 'react';
import HomeCarouselMobile from "./HomeCarouselMobile";
import style from '../../components/Styles/Home.module.css';
import loop from '../../assets/home/loop.mp4';
import valise from '../../assets/home/Travel_Mon_Monogram_WW_HP_Category_Pushes_DII.jpg';
import bijoux from '../../assets/home/Women_Accessories_Jewelry_2_WW_HP_Category_Push_DII.jpg';
import sacF from '../../assets/home/Women_Handbags_WW_HP_Category_Push_DII.jpg';
import souliersF from '../../assets/home/Women_Shoes_New_WW_HP_Category_Pushes_DII.jpg';
import sacH from '../../assets/home/Men_Bags_WW_HP_Category_Push_DII.jpg';
import souliersH from '../../assets/home/Men_Shoes_2_New_WW_HP_Category_Push_DII.jpg';
import lunettes from '../../assets/home/Men_Accessories_Sunglasses_WW_HP_Category_Push_DII.jpg';
import parfums from '../../assets/home/Perfumes_lot_WW_HP_Category_Push_DII.jpg';
import imageDesktop from '../../assets/home/WOMEN_FW25_HP_Push_0708_DI3.jpg';
import imageMobile from '../../assets/home/WOMEN_FW25_HP_Push_0708_DII.jpg';
import sacF1 from '../../assets/home/louis-vuitton-sac-express-pm--M26039_PM2_Front view.png';
import manteau from '../../assets/home/louis-vuitton-manteau-double-face-a-attache-mousqueton--FTMA45QWE904_PM2_Front view.png';
import carré from '../../assets/home/louis-vuitton-carre-monogram-silhouette-90--M97189_PM2_Front view.png';
import bottine from '../../assets/home/louis-vuitton-bottine-devon--ATR02QPC02_PM2_Front view.png';
import imageDesktop1 from '../../assets/home/W_BC_SUNGLASSES_FJ_GO14_PEARLOCK_17_July25_DI3.jpg';
import imageMobile1 from '../../assets/home/W_BC_SUNGLASSES_FJ_GO14_PEARLOCK_17_July25_DII.jpg';
import lunettes1 from '../../assets/home/louis-vuitton-lunettes-de-soleil-ovales-lv-go-14--Z3013U_PM2_Front view.png';
import lunettes2 from '../../assets/home/louis-vuitton-lunettes-de-soleil-ovales-lv-go-14--Z3014U_PM2_Front view.png';
import lunettes3 from '../../assets/home/louis-vuitton-lunettes-de-soleil-carrees-lv-go-14--Z2120W_PM2_Front view.png';
import lunettes4 from '../../assets/home/louis-vuitton-lunettes-de-soleil-rondes-lv-go-14--Z2378W_PM2_Front view.png';
import sacEnd from '../../assets/home/LV_Personalization_WW_HP_Services_Push_1104_DII.jpg';
import cadeauxEnd from '../../assets/home/LV_Gifting_WW_HP_Services_Push_20240425_DII.jpg';
import serviceEnd from '../../assets/home/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg';

export default function Home() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handlePausePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <>
    <section>
      <div className={style.homeSection}>
        <div className={style.homeLoop}>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <video
              ref={videoRef}
              src={loop}
              className={style.homeLoopImg}
              autoPlay
              loop
              muted
              playsInline
              onClick={e => e.preventDefault()}
            />
          </a>
          <div className={style.homeBottomOverlay}></div>
        </div>
        <div className={style.homeOverlay}>
          <div className={style.homeContent}>
            <span className={style.homeLabel}>HOMME</span>
            <h1 className={style.homeTitle}>Automne-Hiver 2025</h1>
            <a href="#" className={style.homeBtn}>Découvrir la Collection</a>
          </div>
          <div className={style.homeControls}>
            <span className={style.homePause} onClick={handlePausePlay}>
              <i className={`fa-solid ${isPaused ? 'fa-play' : 'fa-pause'}`}></i>
            </span>
            <span className={style.homeVolume} onClick={handleMute}>
              <i className={`fa-solid ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
            </span>
          </div>
        </div>
      </div>
      </section>
      
      <section>
        <div className={style.maisonGridSection}>
          <h2 className={style.maisonGridTitle}>Explorez une sélection de créations de la Maison</h2>
          <div className={style.maisonGrid}>
            <a href="/mon-monogram" className={style.maisonGridLink}>
              <div className={style.maisonGridItem}>
                <img src={valise} className={style.maisonGridImg} />
                <div className={style.maisonGridLabel}>Mon Monogram Personnalisation</div>
              </div>
            </a>
            <a href="/bijoux-femme" className={style.maisonGridLink}>
              <div className={style.maisonGridItem}>
                <img src={bijoux} className={style.maisonGridImg} />
                <div className={style.maisonGridLabel}>Bijoux Femme</div>
              </div>
            </a>
            <a href="/sacs-femme" className={style.maisonGridLink}>
              <div className={style.maisonGridItem}>
                <img src={sacF} className={style.maisonGridImg} />
                <div className={style.maisonGridLabel}>Sacs Femme</div>
              </div>
            </a>
            <a href="/souliers-femme" className={style.maisonGridLink}>
              <div className={style.maisonGridItem}>
                <img src={souliersF} className={style.maisonGridImg} />
                <div className={style.maisonGridLabel}>Souliers Femme</div>
              </div>
            </a>

            <a href="/mon-monogram" className={style.maisonGridLink}>
              <div className={style.maisonGridItem}>
                <img src={souliersH} className={style.maisonGridImg} />
                <div className={style.maisonGridLabel}>Sneakers Homme</div>
              </div>
            </a>
            <a href="/bijoux-femme" className={style.maisonGridLink}>
              <div className={style.maisonGridItem}>
                <img src={sacH} className={style.maisonGridImg} />
                <div className={style.maisonGridLabel}>Sacs Homme</div>
              </div>
            </a>
            <a href="/sacs-femme" className={style.maisonGridLink}>
              <div className={style.maisonGridItem}>
                <img src={lunettes} className={style.maisonGridImg} />
                <div className={style.maisonGridLabel}>Lunettes Homme</div>
              </div>
            </a>
            <a href="/souliers-femme" className={style.maisonGridLink}>
              <div className={style.maisonGridItem}>
                <img src={parfums} className={style.maisonGridImg} />
                <div className={style.maisonGridLabel}>Parfums</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className={style.SectionImg}>
          <a href="/femme" className={style.SectionImgLink}>
            <div className={style.SectionImgItem}>
              <img src={imageDesktop} className={style.SectionImgDesktop} />
              <img src={imageMobile} className={style.SectionImgMobile} />
            </div>
          </a>
            <div className={style.SectionImgContent}>
              <span className={style.ImgLabel}>FEMME</span>
              <h1 className={style.ImgTitle}>Automne-Hiver 2025</h1>

            <div className={style.ImgGrid}>
              <a href="/mon-monogram" className={style.ImgGridLink}>
                <div className={style.ImgGridItem} style={{position: 'relative'}}>
                  <img src={sacF1} className={style.ImgGridImg} />
                  <i className={style.heartIcon + " fa-regular fa-heart"}></i>
                  <div className={style.ImgGridImgOverlay}></div>
                  <div className={style.ImgGridLabel}>Sac Express PM</div>
                  <div className={style.ImgGridPrice}>3 500,00€</div>
                </div>
              </a>
              <a href="/bijoux-femme" className={style.ImgGridLink}>
                <div className={style.ImgGridItem} style={{position: 'relative'}}>
                  <img src={manteau} className={style.ImgGridImg} />
                  <i className={style.heartIcon + " fa-regular fa-heart"}></i>
                  <div className={style.ImgGridImgOverlay}></div>
                  <div className={style.ImgGridLabel}>Manteau double-face à attache mousqueton </div>
                  <div className={style.ImgGridPrice}>4 800,00€</div>
                </div>
              </a>
              <a href="/sacs-femme" className={style.ImgGridLink}>
                <div className={style.ImgGridItem} style={{position: 'relative'}}>
                  <img src={carré} className={style.ImgGridImg} />
                  <i className={style.heartIcon + " fa-regular fa-heart"}></i>
                  <div className={style.ImgGridImgOverlay}></div>
                  <div className={style.ImgGridLabel}>Sac Carré Monogram Silhouette 90</div>
                  <div className={style.ImgGridPrice}>490,00€</div>
                </div>
              </a>
              <a href="/souliers-femme" className={style.ImgGridLink}>
                <div className={style.ImgGridItem} style={{position: 'relative'}}>
                  <img src={bottine} className={style.ImgGridImg} />
                  <i className={style.heartIcon + " fa-regular fa-heart"}></i>
                  <div className={style.ImgGridImgOverlay}></div>
                  <div className={style.ImgGridLabel}>Bottine Devon</div>
                  <div className={style.ImgGridPrice}>1 350,00€</div>
                </div>
              </a>
            </div>

              <a href="#" className={style.ImgBtn}>Découvrir la Collection</a>
          </div>
        </div>
      </section>

      <section>
        <div className={style.SectionImgBis}>
          <a href="/homme" className={style.SectionImgLinkBis}>
            <div className={style.SectionImgItemBis}>
              <img src={imageDesktop1} className={style.SectionImgDesktopBis} />
              <img src={imageMobile1} className={style.SectionImgMobileBis} />
            </div>
          </a>
            <div className={style.SectionImgContentBis}>
              <span className={style.ImgLabelBis}>FEMME</span>
              <h1 className={style.ImgTitleBis}>Lunette de soleil</h1>

            <div className={style.ImgGridBis}>
              <a href="/sacs-homme" className={style.ImgGridLinkBis}>
                <div className={style.ImgGridItemBis} style={{position: 'relative'}}>
                  <img src={lunettes1} className={style.ImgGridImgBis} />
                  <i className={style.heartIcon + " fa-regular fa-heart"}></i>
                  <div className={style.ImgGridImgOverlayBis}></div>
                  <div className={style.ImgGridLabelBis}>Lunettes de soleil ovales LV-GO 14</div>
                  <div className={style.ImgGridPriceBis}>500,00€</div>
                </div>
              </a>
              <a href="/souliers-homme" className={style.ImgGridLinkBis}>
                <div className={style.ImgGridItemBis} style={{position: 'relative'}}>
                  <img src={lunettes2} className={style.ImgGridImgBis} />
                  <i className={style.heartIcon + " fa-regular fa-heart"}></i>
                  <div className={style.ImgGridImgOverlayBis}></div>
                  <div className={style.ImgGridLabelBis}>Lunettes de soleil ovales LV-GO 14</div>
                  <div className={style.ImgGridPriceBis}>500,00€</div>
                </div>
              </a>
              <a href="/lunettes-homme" className={style.ImgGridLinkBis}>
                <div className={style.ImgGridItemBis} style={{position: 'relative'}}>
                  <img src={lunettes3} className={style.ImgGridImgBis} />
                  <i className={style.heartIcon + " fa-regular fa-heart"}></i>
                  <div className={style.ImgGridImgOverlayBis}></div>
                  <div className={style.ImgGridLabelBis}>Lunettes de soleil carrées LV GO-14</div>
                  <div className={style.ImgGridPriceBis}>500,00€</div>
                </div>
              </a>
              <a href="/parfums-homme" className={style.ImgGridLinkBis}>
                <div className={style.ImgGridItemBis} style={{position: 'relative'}}>
                  <img src={lunettes4} className={style.ImgGridImgBis} />
                  <i className={style.heartIcon + " fa-regular fa-heart"}></i>
                  <div className={style.ImgGridImgOverlayBis}></div>
                  <div className={style.ImgGridLabelBis}>Lunettes de soleil rondes LV GO-14 </div>
                  <div className={style.ImgGridPriceBis}>500,00€</div>
                </div>
              </a>
            </div>

              <a href="#" className={style.ImgBtnBis}>Découvrir la Sélection</a>
          </div>
        </div>
      </section>

     <section>
      <div className={style.SectionEnd}>
        <div className={style.SectionEndContent}>
          <h1 className={style.EndTitle}>Les Services Louis Vuitton</h1>
          <span className={style.EndLabel}>Louis Vuitton offre un emballage signature pour toute commande, présentée <br /> dans les boîtes iconiques de la Maison.</span>
        </div>

        <div className={style.servicesSection}>
          <div className={style.servicesGrid}>
            <div className={style.servicesItem}>
              <img src={sacEnd} className={style.servicesImg} />
              <div className={style.servicesTitle}>Personnalisation</div>
              <a href="#" className={style.servicesLink}>Explorer</a>
            </div>
            <div className={style.servicesItem}>
              <img src={cadeauxEnd} className={style.servicesImg} />
              <div className={style.servicesTitle}>L'Art d'offrir</div>
              <div>
                <a href="#" className={style.servicesLink}>Pour Elle</a>
                <span> </span>
                <a href="#" className={style.servicesLink}>Pour Lui</a>
              </div>
            </div>
            <div className={style.servicesItem}>
              <img src={serviceEnd} className={style.servicesImg} />
              <div className={style.servicesTitle}>Services</div>
              <a href="#" className={style.servicesLink}>Nous contacter</a>
            </div>
          </div>
        </div>
      </div>

      <HomeCarouselMobile />
      
     </section>
    </>
  );
}