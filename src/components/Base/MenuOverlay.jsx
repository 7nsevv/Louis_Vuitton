import React, { useState } from "react";
import styles from "../../components/Styles/MenuOverlay.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import femmeImg from '../../assets/menu/louis-vuitton--MM_Women_Beauty_NotifyMe_AUG12_DI3.jpg';
import hommeImg from '../../assets/menu/louis-vuitton--MM_MEN_SHOW_FW25_AUG7_DL2_DI3.jpg';
import hommeImg2 from '../../assets/menu/louis-vuitton--Jewelry_Collections_SilverLockit_July25_DI3.jpg';
import montreImg from '../../assets/menu/louis-vuitton--MM_WATCHES_NOVELTIES_Janv25_DI3.jpg'
import voyageImg from '../../assets/menu/louis-vuitton--U_PETS COLLECTION_MM_June25_DI3.jpg';
import voyageImg2 from '../../assets/menu/louis-vuitton--Trunks_Travel_and_Home_Sport_and_Games_MM_Jul25_DI3.jpg';

const menuItems = [
  { title: "Cadeaux et Personnalisation", sub: ["Cadeaux pour Elle", "Cadeaux pour Lui", "Cadeaux pour la Maison", "Cadeaux pour Bébés", "Cadeaux pour Animaux de Compagnie", "Les cadeaux Louis Vuitton", "Personnalisation"] },
  { title: "Nouveautés", sub: ["Femme", "Homme", "Pour les Animaux de Compagnie"] },
  { title: "Sacs et Petite Maroquinerie", sub: ["Sacs Femme", "Petite Maroquinerie Homme", "Sacs Homme", "Petite Maroquinerie Femme", "Personnalisation"] },
  { title: "Femme", sub: ["Prêt-à-porter", "Sacs à main", "Portefeuilles et petite maroquinerie", "Voyage", "Accessoires", "Bijoux Fantaisie", "Souliers"] },
  { title: "Homme", sub: ["Sacs", "Portefeuilles et petite maroquinerie", "Voyage", "Accessoires", "Bijoux Fantaisie", "Souliers", "Prêt-à-porter"] },
  { title: "Joaillerie", sub: ["Collections", "Catégories", "Collections de Haute Joaillerie"] },
  { title: "Montres", sub: ["Toutes les montres", "Collections", "Haute Horlogerie", "La Fabrique du Temps Louis Vuitton", "Louis Vuitton Watch Prize for Independent Creatives", "Collaborations"] },
  { title: "Parfums", sub: ["Parfums à la Une", "Icônes", "Collections", "Créations d'exception"] },
  { title: "Malles, Voyage et Maison", sub: ["Malles et Coffrets", "Sacs de voyage et Bagages roulants", "Maison et Art de la Table", "Livres et Papeterie", "Objets et accessoires high-tech"] },
  { title: "Services", sub: ["Service Client", "L'Art d'offrir", "Les réparations Louis Vuitton"] },
  { title: "La Maison Louis Vuitton", sub: ["Histoire", "Savoir-Faire"] },
];

export default function MenuOverlay({ open, onClose }) {
  const [closing, setClosing] = useState(false);
  const [contrast, setContrast] = useState(false);
  const [activeSub, setActiveSub] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [hoveredSubIdx, setHoveredSubIdx] = useState(null);
  const [activeSubIdx, setActiveSubIdx] = useState(null);

  if (!open && !closing) return null;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setActiveSub(null);
      onClose();
    }, 300);
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${closing ? styles.overlayHidden : ""}`}
        onClick={handleClose}
      ></div>

      <nav
        className={`${styles.menu} ${closing ? styles.menuHidden : ""} ${styles.menuScrollable}`}
      >
        <button className={styles.closeBtn} onClick={handleClose}>
          <span className={styles.closeIcon}>&#10005;</span>
          <span className={styles.closeText}>Fermer</span>
        </button>

        <ul className={styles.menuList}>
          {menuItems.map((item, idx) => {
            let className = styles.menuListItem;
            const isActive = idx === activeSub;
            const isHovered = hoveredIdx === idx;
            if (hoveredIdx !== null || activeSub !== null) {
              className +=
                isHovered || isActive
                  ? ''
                  : ' ' + styles.menuListItemUnselected;
            }
            const isLast = idx === menuItems.length - 1;
            return (
              <li
                key={item.title}
                className={className}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => {
                  if (!isLast) setActiveSub(idx);
                }}
                style={{ cursor: 'pointer' }}
              >
                <span className={styles.menuListItemText}>{item.title}</span>
                {!isLast && (
                  <span className={styles.menuListItemArrow} style={{ opacity: isHovered || isActive ? 1 : 0 }}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        <a
          href="#"
          className={styles.menuHelpSection}
          style={{ textDecoration: "none" }}
        >
          <div>Besoin d'aide&nbsp;?</div>
          <div className={styles.menuHelpPhone}>+33 9 77 40 40 77</div>
        </a>

        <div className={styles.menuHelpLinks}>
          <a href="#" className={styles.menuHelpLink}>
            Développement Durable
          </a>
          <a href="#" className={styles.menuHelpLink}>
            Magasins
          </a>
          <a href="#" className={styles.menuHelpLink}>
            Pays de livraison&nbsp;: France
          </a>
        </div>

        <div className={styles.menuAccessibility}>
          <span>Accessibilité&nbsp;: Contraste amélioré</span>
          <button
            className={`${styles.menuSwitch} ${contrast ? styles.menuSwitchActive : ""}`}
            onClick={() => setContrast((v) => !v)}
            aria-pressed={contrast}
            aria-label="Activer le contraste amélioré"
            type="button"
          >
            <span className={styles.menuSwitchKnob}></span>
          </button>
        </div>
      </nav>

      {activeSub !== null && (
        <div className={
          `${styles.subMenu} ${styles.subMenuActive} ${(closing && (activeSub === 2 || activeSub === 3 || activeSub === 4)) ? styles.subMenuHidden : ''}`
        }>
          {activeSub === 2 ? (
            <div className={styles.subMenuSplitSections}>
              <div className={styles.subMenuSectionTop}>
                <div className={styles.subMenuSectionTitle}>Votre sélection</div>
                <ul className={styles.subMenuList1}>
                  {menuItems[activeSub].sub.slice(0, 2).map((subItem, i) => {
                    const globalIdx = i;
                    const isSelected = hoveredSubIdx === globalIdx || activeSubIdx === globalIdx;
                    const shouldBeUnselected = hoveredSubIdx !== null && !isSelected;
                    return (
                      <li
                        key={subItem}
                        className={
                          styles.subMenuItem +
                          (isSelected ? ' selected' : shouldBeUnselected ? ' ' + styles.subMenuItemUnselected : '')
                        }
                        onMouseEnter={() => setHoveredSubIdx(globalIdx)}
                        onMouseLeave={() => setHoveredSubIdx(null)}
                        onClick={() => setActiveSubIdx(globalIdx)}
                      >
                        <span className={styles.subMenuItemText}>{subItem}</span>
                        {subItem !== "Personnalisation" && (
                          <span className={styles.subMenuItemArrow}>
                            <FontAwesomeIcon icon={faChevronRight} />
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <hr className={styles.subMenuDivider} />
              <div className={styles.subMenuSectionBottom}>
                <ul className={styles.subMenuList1}>
                  {menuItems[activeSub].sub.slice(2).map((subItem, i) => {
                    const globalIdx = i + 2;
                    const isSelected = hoveredSubIdx === globalIdx || activeSubIdx === globalIdx;
                    const shouldBeUnselected = hoveredSubIdx !== null && !isSelected;
                    return (
                      <li
                        key={subItem}
                        className={
                          styles.subMenuItem +
                          (isSelected ? ' selected' : shouldBeUnselected ? ' ' + styles.subMenuItemUnselected : '')
                        }
                        onMouseEnter={() => setHoveredSubIdx(globalIdx)}
                        onMouseLeave={() => setHoveredSubIdx(null)}
                        onClick={() => setActiveSubIdx(globalIdx)}
                      >
                        <span className={styles.subMenuItemText}>{subItem}</span>
                        {activeSub === 2 && subItem !== "Personnalisation" && (
                          <span className={styles.subMenuItemArrow}>
                            <FontAwesomeIcon icon={faChevronRight} />
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : activeSub === 3 ? (
            <>
              <a href="#" className={styles.subMenuFemmeHeader} style={{ textDecoration: 'none' }}>
                <img src={femmeImg} alt="Femme" className={styles.subMenuFemmeImg} />
                <div className={styles.subMenuFemmeText}>La Beauté Louis Vuitton: S'inscrire</div>
              </a>
              <hr className={styles.subMenuFemmeDivider} />
              <ul className={styles.subMenuListSimple}>
                {menuItems[activeSub].sub.map((subItem, i) => {
                  const isSelected = hoveredSubIdx === i || activeSubIdx === i;
                  const shouldBeUnselected = hoveredSubIdx !== null && !isSelected;
                  return (
                    <li
                      key={subItem}
                      className={
                        styles.subMenuItem +
                        (isSelected ? ' selected' : shouldBeUnselected ? ' ' + styles.subMenuItemUnselected : '')
                      }
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
                      onMouseEnter={() => setHoveredSubIdx(i)}
                      onMouseLeave={() => setHoveredSubIdx(null)}
                      onClick={() => setActiveSubIdx(i)}
                    >
                      <span className={styles.subMenuItemText}>{subItem}</span>
                      <span className={styles.subMenuItemArrow}>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : activeSub === 4 ? (
            <>
              <a href="#" className={styles.subMenuFemmeHeader} style={{ textDecoration: 'none' }}>
                <img src={hommeImg} alt="Homme" className={styles.subMenuFemmeImg} />
                <div className={styles.subMenuFemmeText}>La Beauté Louis Vuitton: S'inscrire</div>
              </a>
              <hr className={styles.subMenuFemmeDivider} />
              <ul className={styles.subMenuListSimple}>
                {menuItems[activeSub].sub.map((subItem, i) => {
                  const isSelected = hoveredSubIdx === i || activeSubIdx === i;
                  const shouldBeUnselected = hoveredSubIdx !== null && !isSelected;
                  return (
                    <li
                      key={subItem}
                      className={
                        styles.subMenuItem +
                        (isSelected ? ' selected' : shouldBeUnselected ? ' ' + styles.subMenuItemUnselected : '')
                      }
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
                      onMouseEnter={() => setHoveredSubIdx(i)}
                      onMouseLeave={() => setHoveredSubIdx(null)}
                      onClick={() => setActiveSubIdx(i)}
                    >
                      <span className={styles.subMenuItemText}>{subItem}</span>
                      <span className={styles.subMenuItemArrow}>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : activeSub === 5 ? (
            <>
              <a href="#" className={styles.subMenuFemmeHeader} style={{ textDecoration: 'none' }}>
                <img src={hommeImg2} className={styles.subMenuFemmeImg} />
                <div className={styles.subMenuFemmeText}>Silvert Lockit</div>
              </a>
              <hr className={styles.subMenuFemmeDivider} />
              <ul className={styles.subMenuListSimple}>
                {menuItems[activeSub].sub.map((subItem, i) => {
                  const isSelected = hoveredSubIdx === i || activeSubIdx === i;
                  const shouldBeUnselected = hoveredSubIdx !== null && !isSelected;
                  return (
                    <li
                      key={subItem}
                      className={
                        styles.subMenuItem +
                        (isSelected ? ' selected' : shouldBeUnselected ? ' ' + styles.subMenuItemUnselected : '')
                      }
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
                      onMouseEnter={() => setHoveredSubIdx(i)}
                      onMouseLeave={() => setHoveredSubIdx(null)}
                      onClick={() => setActiveSubIdx(i)}
                    >
                      <span className={styles.subMenuItemText}>{subItem}</span>
                      <span className={styles.subMenuItemArrow}>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : activeSub === 6 ? (
            <>
              <a href="#" className={styles.subMenuFemmeHeader} style={{ textDecoration: 'none' }}>
                <img src={montreImg} className={styles.subMenuFemmeImg} />
                <div className={styles.subMenuFemmeText}>Nouveautés</div>
              </a>
              <hr className={styles.subMenuFemmeDivider} />
              <ul className={styles.subMenuListSimple}>
                {menuItems[activeSub].sub.map((subItem, i) => {
                  const isSelected = hoveredSubIdx === i || activeSubIdx === i;
                  const shouldBeUnselected = hoveredSubIdx !== null && !isSelected;
                  return (
                    <li
                      key={subItem}
                      className={
                        styles.subMenuItem +
                        (isSelected ? ' selected' : shouldBeUnselected ? ' ' + styles.subMenuItemUnselected : '')
                      }
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
                      onMouseEnter={() => setHoveredSubIdx(i)}
                      onMouseLeave={() => setHoveredSubIdx(null)}
                      onClick={() => setActiveSubIdx(i)}
                    >
                      <span className={styles.subMenuItemText}>{subItem}</span>
                      <span className={styles.subMenuItemArrow}>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : activeSub === 8 ? (
            <>
              <div className={styles.subMenuDoubleImageRow}>
                <a href="#" className={styles.subMenuFemmeHeader}>
                  <img src={voyageImg} className={styles.subMenuFemmeImg} />
                  <div className={styles.subMenuFemmeText}>Accessoires pour Animaux de Compagnie</div>
                </a>
                <a href="#" className={styles.subMenuFemmeHeader}>
                  <img src={voyageImg2} className={styles.subMenuFemmeImg} />
                  <div className={styles.subMenuFemmeText}>Sport et jeux</div>
                </a>
              </div>
              <hr className={styles.subMenuFemmeDivider} />
              <ul className={styles.subMenuListSimple}>
                {menuItems[activeSub].sub.map((subItem, i) => {
                  const isSelected = hoveredSubIdx === i || activeSubIdx === i;
                  const shouldBeUnselected = hoveredSubIdx !== null && !isSelected;
                  return (
                    <li
                      key={subItem}
                      className={
                        styles.subMenuItem +
                        (isSelected ? ' selected' : shouldBeUnselected ? ' ' + styles.subMenuItemUnselected : '')
                      }
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
                      onMouseEnter={() => setHoveredSubIdx(i)}
                      onMouseLeave={() => setHoveredSubIdx(null)}
                      onClick={() => setActiveSubIdx(i)}
                    >
                      <span className={styles.subMenuItemText}>{subItem}</span>
                      <span className={styles.subMenuItemArrow}>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : activeSub === 9 ? (
            <div className={styles.subMenuSplitSections}>
              <div className={styles.subMenuSectionTop}>
                <div className={styles.subMenuSectionTitle}>Votre sélection</div>
                <ul className={styles.subMenuList1}>
                  {menuItems[activeSub].sub.slice(0, 1).map((subItem, i) => {
                    const globalIdx = i;
                    const isSelected = hoveredSubIdx === globalIdx || activeSubIdx === globalIdx;
                    const shouldBeUnselected = hoveredSubIdx !== null && !isSelected;
                    return (
                      <li
                        key={subItem}
                        className={
                          styles.subMenuItem +
                          (isSelected ? ' selected' : shouldBeUnselected ? ' ' + styles.subMenuItemUnselected : '')
                        }
                        onMouseEnter={() => setHoveredSubIdx(globalIdx)}
                        onMouseLeave={() => setHoveredSubIdx(null)}
                        onClick={() => setActiveSubIdx(globalIdx)}
                      >
                        <span className={styles.subMenuItemText}>{subItem}</span>
                        <span className={styles.subMenuItemArrow}>
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <hr className={styles.subMenuDivider} />
              <div className={styles.subMenuSectionBottom}>
                <ul className={styles.subMenuList1}>
                  {menuItems[activeSub].sub.slice(1).map((subItem, i) => {
                    const globalIdx = i + 1;
                    const isSelected = hoveredSubIdx === globalIdx || activeSubIdx === globalIdx;
                    const shouldBeUnselected = hoveredSubIdx !== null && !isSelected;
                    return (
                      <li
                        key={subItem}
                        className={
                          styles.subMenuItem +
                          (isSelected ? ' selected' : shouldBeUnselected ? ' ' + styles.subMenuItemUnselected : '')
                        }
                        onMouseEnter={() => setHoveredSubIdx(globalIdx)}
                        onMouseLeave={() => setHoveredSubIdx(null)}
                        onClick={() => setActiveSubIdx(globalIdx)}
                      >
                        <span className={styles.subMenuItemText}>{subItem}</span>
                        {/* Pas de flèche sur le dernier item */}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            <ul className={styles.subMenuList}>
              {menuItems[activeSub]?.sub.map((subItem, i) => {
                const isSelected = hoveredSubIdx === i || activeSubIdx === i;
                const shouldBeUnselected = hoveredSubIdx !== null && !isSelected;
                return (
                  <li
                    key={subItem}
                    className={
                      styles.subMenuItem +
                      (isSelected ? ' selected' : shouldBeUnselected ? ' ' + styles.subMenuItemUnselected : '')
                    }
                    onMouseEnter={() => setHoveredSubIdx(i)}
                    onMouseLeave={() => setHoveredSubIdx(null)}
                    onClick={() => setActiveSubIdx(i)}
                  >
                    <span className={styles.subMenuItemText}>{subItem}</span>
                    {activeSub === 2 && subItem !== "Personnalisation" && (
                      <span className={styles.subMenuItemArrow}>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    )}
                    {activeSub === 0 && subItem === "Personnalisation" && (
                      <span className={styles.subMenuItemArrow}>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    )}
                    {activeSub === 1 && (subItem === "Femme" || subItem === "Homme") && (
                      <span className={styles.subMenuItemArrow}>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </>
  );
}