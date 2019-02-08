"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * String values for card rarities.
 */
var MTGCardRarity;
(function (MTGCardRarity) {
    MTGCardRarity["Common"] = "common";
    MTGCardRarity["Uncommon"] = "uncommon";
    MTGCardRarity["Rare"] = "rare";
    MTGCardRarity["MythicRare"] = "mythicrare";
})(MTGCardRarity = exports.MTGCardRarity || (exports.MTGCardRarity = {}));
/**
 * All of the available locales that cards could be printed in.
 * http://gatherer.wizards.com/Pages/Language.aspx
 */
var MTGLocale;
(function (MTGLocale) {
    MTGLocale["ENUS"] = "en-US";
    MTGLocale["ZHTW"] = "zh-tw";
    MTGLocale["ZHCN"] = "zh-cn";
    MTGLocale["FRFR"] = "fr-fr";
    MTGLocale["JAJP"] = "ja-jp";
    MTGLocale["KOKR"] = "ko-KR";
    MTGLocale["RURU"] = "ru-RU";
    MTGLocale["ESES"] = "es-es";
    MTGLocale["DEDE"] = "de-de";
    MTGLocale["PTBR"] = "pt-br";
})(MTGLocale = exports.MTGLocale || (exports.MTGLocale = {}));
/**
 * All of the available languages that cards could be printed in. Very similar to locale, but does not include country code.
 * http://gatherer.wizards.com/Pages/Language.aspx
 */
var MTGLanguage;
(function (MTGLanguage) {
    MTGLanguage["EN"] = "en-US";
    MTGLanguage["ZHT"] = "zht";
    MTGLanguage["ZHS"] = "zhs";
    MTGLanguage["FR"] = "fr";
    MTGLanguage["JA"] = "ja";
    MTGLanguage["KO"] = "ko";
    MTGLanguage["RU"] = "ru";
    MTGLanguage["ES"] = "es";
    MTGLanguage["DE"] = "de";
    MTGLanguage["PT"] = "pt";
    MTGLanguage["IT"] = "it";
    MTGLanguage["HE"] = "he";
    MTGLanguage["LA"] = "la";
    MTGLanguage["GRC"] = "grc";
    MTGLanguage["AR"] = "ar";
    MTGLanguage["SA"] = "sa";
    MTGLanguage["PX"] = "px";
})(MTGLanguage = exports.MTGLanguage || (exports.MTGLanguage = {}));
/**
 * String values for all of the notable formats.
 */
var ScryfallFormat;
(function (ScryfallFormat) {
    ScryfallFormat["Standard"] = "standard";
    ScryfallFormat["Modern"] = "modern";
    ScryfallFormat["Legacy"] = "legacy";
    ScryfallFormat["Vintage"] = "vintage";
    ScryfallFormat["Commander"] = "commander";
    ScryfallFormat["Future"] = "future";
    ScryfallFormat["Frontier"] = "frontier";
    ScryfallFormat["Pauper"] = "pauper";
    ScryfallFormat["Penny"] = "penny";
    ScryfallFormat["Duel"] = "duel";
    ScryfallFormat["Oldschool"] = "oldschool";
})(ScryfallFormat = exports.ScryfallFormat || (exports.ScryfallFormat = {}));
/**
 * String values for all of the available cost symbols.
 */
var MTGCostType;
(function (MTGCostType) {
    //Ability specific
    MTGCostType["Tap"] = "T";
    //Normal WUBRG+C
    MTGCostType["White"] = "W";
    MTGCostType["Blue"] = "U";
    MTGCostType["Black"] = "B";
    MTGCostType["Red"] = "R";
    MTGCostType["Green"] = "G";
    MTGCostType["Colorless"] = "C";
    //Half WUBRG
    MTGCostType["HalfWhite"] = "HalfW";
    MTGCostType["HalfBlue"] = "HalfU";
    MTGCostType["HalfBlack"] = "HalfB";
    MTGCostType["HalfRed"] = "HalfR";
    MTGCostType["HalfGreen"] = "HalfG";
    //Color Combos
    MTGCostType["WhiteOrBlue"] = "WU";
    MTGCostType["WhiteOrBlack"] = "WB";
    MTGCostType["BlueOrRed"] = "UR";
    MTGCostType["BlueOrBlack"] = "UB";
    MTGCostType["BlackOrRed"] = "BR";
    MTGCostType["BlackOrGreen"] = "BG";
    MTGCostType["RedOrWhite"] = "RW";
    MTGCostType["RedOrGreen"] = "RG";
    MTGCostType["GreenOrWhite"] = "GW";
    MTGCostType["GreenOrBlue"] = "GU";
    //Color or 2 Colorless
    MTGCostType["WhiteOrTwoColorless"] = "2W";
    MTGCostType["BlueOrTwoColorless"] = "2U";
    MTGCostType["BlackOrTwoColorless"] = "2B";
    MTGCostType["RedOrTwoColorless"] = "2R";
    MTGCostType["GreenOrTwoColorless"] = "2G";
    //Color or 2 Life
    MTGCostType["WhiteOrTwoLife"] = "WP";
    MTGCostType["BlueOrTwoLife"] = "UP";
    MTGCostType["BlackOrTwoLife"] = "BP";
    MTGCostType["RedOrTwoLife"] = "RP";
    MTGCostType["GreenOrTwoLife"] = "GP";
    //Variable
    MTGCostType["X"] = "X";
    MTGCostType["Y"] = "Y";
    MTGCostType["Z"] = "Z";
})(MTGCostType = exports.MTGCostType || (exports.MTGCostType = {}));
/**
 * String values for card super types.
 */
var MTGCardSuperType;
(function (MTGCardSuperType) {
    MTGCardSuperType["Basic"] = "Basic";
    MTGCardSuperType["Legendary"] = "Legendary";
    MTGCardSuperType["Ongoing"] = "Ongoing";
    MTGCardSuperType["Snow"] = "Snow";
    MTGCardSuperType["World"] = "World";
})(MTGCardSuperType = exports.MTGCardSuperType || (exports.MTGCardSuperType = {}));
/**
 * https://scryfall.com/docs/api/layouts#frame-effects
 */
var ScryfallFrameEffectEnum;
(function (ScryfallFrameEffectEnum) {
    ScryfallFrameEffectEnum["Legendary"] = "legendary";
    ScryfallFrameEffectEnum["Miracle"] = "miracle";
    ScryfallFrameEffectEnum["NyxTouched"] = "nyxtouched";
    ScryfallFrameEffectEnum["Draft"] = "draft";
    ScryfallFrameEffectEnum["Devoid"] = "devoid";
    ScryfallFrameEffectEnum["Tombstone"] = "tombstone";
    ScryfallFrameEffectEnum["ColorShifted"] = "colorshifted";
    ScryfallFrameEffectEnum["SunMoonDFC"] = "sunmoondfc";
    ScryfallFrameEffectEnum["CompassLandDFC"] = "compasslanddfc";
    ScryfallFrameEffectEnum["OriginPWDFC"] = "originpwdfc";
    ScryfallFrameEffectEnum["MoonEldraziDFC"] = "MoonEldraziDFC";
})(ScryfallFrameEffectEnum = exports.ScryfallFrameEffectEnum || (exports.ScryfallFrameEffectEnum = {}));
var MTGBorderColor;
(function (MTGBorderColor) {
    MTGBorderColor["Black"] = "black";
    MTGBorderColor["Borderless"] = "borderless";
    MTGBorderColor["Gold"] = "gold";
    MTGBorderColor["Silver"] = "silver";
    MTGBorderColor["White"] = "white";
})(MTGBorderColor = exports.MTGBorderColor || (exports.MTGBorderColor = {}));
var ScryfallLayout;
(function (ScryfallLayout) {
    ScryfallLayout["Scheme"] = "scheme";
    ScryfallLayout["Normal"] = "normal";
    ScryfallLayout["Split"] = "split";
    ScryfallLayout["Flip"] = "flip";
    ScryfallLayout["Transform"] = "transform";
    ScryfallLayout["Meld"] = "meld";
    ScryfallLayout["Leveler"] = "leveler";
    ScryfallLayout["Saga"] = "saga";
    ScryfallLayout["Planar"] = "planar";
    ScryfallLayout["Vanguard"] = "vanguard";
    ScryfallLayout["Token"] = "token";
    ScryfallLayout["DoubleFacedToken"] = "double_faced_token";
    ScryfallLayout["Emblem"] = "emblem";
    ScryfallLayout["Augment"] = "augment";
    ScryfallLayout["Host"] = "host";
})(ScryfallLayout = exports.ScryfallLayout || (exports.ScryfallLayout = {}));
var ScryfallComponent;
(function (ScryfallComponent) {
    ScryfallComponent["Token"] = "token";
    ScryfallComponent["ComboPiece"] = "combo_piece";
    ScryfallComponent["MeldPart"] = "meld_part";
})(ScryfallComponent = exports.ScryfallComponent || (exports.ScryfallComponent = {}));
