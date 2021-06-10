import moment from 'moment';
import React from 'react';
import { useHistory } from 'react-router';
import icon_money from '../../image/icon/money.png'
export default function RecruitmentItem({ data }) {
    let history = useHistory();
    return (
        <div className="col-lg-4 col-sm-6 col-12" onClick={() => history.push({
            pathname: '/detail-recruitment',
            state: data?._id
        })}>
            <div className="recruitment__list__block">
                <div className="block__info">
                    <div className="block__info--logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="92.332" height="67.86" viewBox="0 0 92.332 67.86">
                            <g id="Group_1840" data-name="Group 1840" transform="translate(-1059.454 -1181.938)">
                                <g id="Group_1823" data-name="Group 1823" transform="translate(1062.425 1236.916)">
                                    <path id="Path_1708" data-name="Path 1708" d="M1083.894,1596.832v1.514h-.429v-1.489a.571.571,0,0,0-.612-.631c-.429,0-.715.261-.715.814v1.307h-.429v-3.452h.429v1.341a.87.87,0,0,1,.8-.419A.923.923,0,0,1,1083.894,1596.832Z" transform="translate(-1081.71 -1594.746)" fill="#fff" />
                                    <path id="Path_1709" data-name="Path 1709" d="M1110.659,1604.4a1.288,1.288,0,1,1,.922-.375A1.258,1.258,0,0,1,1110.659,1604.4Zm.622-.671a.878.878,0,0,0-.622-1.5.878.878,0,1,0,.622,1.5Z" transform="translate(-1105.671 -1600.733)" fill="#fff" />
                                    <path id="Path_1710" data-name="Path 1710" d="M1139.919,1598.215h-.656v1.337c0,.38.217.35.656.33v.385c-.749.1-1.085-.1-1.085-.715v-1.337h-.488v-.414h.488v-.562l.429-.128v.691h.656Z" transform="translate(-1130.786 -1596.666)" fill="#fff" />
                                    <path id="Path_1711" data-name="Path 1711" d="M1161.307,1603.3a.841.841,0,0,0,.892.7.768.768,0,0,0,.71-.36l.365.207a1.211,1.211,0,0,1-1.085.557,1.314,1.314,0,0,1-.957-.365,1.374,1.374,0,0,1,0-1.859,1.249,1.249,0,0,1,.932-.37,1.126,1.126,0,0,1,.883.385,1.369,1.369,0,0,1,.33,1.109Zm0-.375h1.647a.78.78,0,0,0-.794-.715A.821.821,0,0,0,1161.307,1602.922Z" transform="translate(-1150.301 -1600.733)" fill="#fff" />
                                    <path id="Path_1712" data-name="Path 1712" d="M1191.291,1597.385v-3.6h.429v3.6Z" transform="translate(-1176.663 -1593.785)" fill="#fff" />
                                    <path id="Path_1713" data-name="Path 1713" d="M1207.106,1602.9c.385.084.9.227.893.754a.649.649,0,0,1-.262.537,1.045,1.045,0,0,1-.661.2,1,1,0,0,1-.981-.577l.37-.212a.6.6,0,0,0,.611.385c.281,0,.488-.1.488-.335,0-.192-.217-.3-.488-.365-.39-.1-.893-.232-.893-.754a.667.667,0,0,1,.247-.528,1.034,1.034,0,0,1,1.514.306l-.36.2a.516.516,0,0,0-.528-.316c-.242,0-.439.119-.439.331C1206.617,1602.725,1206.835,1602.829,1207.106,1602.9Z" transform="translate(-1189.491 -1600.733)" fill="#fff" />
                                </g>
                                <g id="Group_1824" data-name="Group 1824" transform="translate(1062.254 1245.531)">
                                    <path id="Path_1714" data-name="Path 1714" d="M1082.578,1658.766h.308v3.27h-.308v-.458a1.047,1.047,0,0,1-.944.514,1.164,1.164,0,0,1-.855-.355,1.253,1.253,0,0,1,0-1.738,1.164,1.164,0,0,1,.855-.355,1.048,1.048,0,0,1,.944.514Zm-.92,3.027a.892.892,0,0,0,.654-.266.91.91,0,0,0,.266-.659.891.891,0,0,0-.266-.654.924.924,0,0,0-1.308,0,.891.891,0,0,0-.266.654.91.91,0,0,0,.266.659A.891.891,0,0,0,1081.658,1661.793Z" transform="translate(-1080.429 -1658.706)" fill="#2c2c2c" />
                                    <path id="Path_1715" data-name="Path 1715" d="M1114.887,1660.226a.225.225,0,1,1,.318,0A.223.223,0,0,1,1114.887,1660.226Zm0,2.742v-2.336h.308v2.336Z" transform="translate(-1110.229 -1659.638)" fill="#2c2c2c" />
                                    <path id="Path_1716" data-name="Path 1716" d="M1129.771,1658.622c-.453-.037-.673.149-.673.6v.093h.673v.3h-.673v2.037h-.308v-2.037h-.4v-.3h.4v-.093a.819.819,0,0,1,.981-.9Z" transform="translate(-1121.99 -1658.319)" fill="#2c2c2c" />
                                    <path id="Path_1717" data-name="Path 1717" d="M1147.63,1658.622c-.453-.037-.673.149-.673.6v.093h.673v.3h-.673v2.037h-.308v-2.037h-.4v-.3h.4v-.093a.819.819,0,0,1,.981-.9Z" transform="translate(-1137.465 -1658.319)" fill="#2c2c2c" />
                                    <path id="Path_1718" data-name="Path 1718" d="M1171.65,1665.714a1.265,1.265,0,0,1,.322.864c0,.033,0,.084-.009.145h-2.051a.876.876,0,0,0,.93.771.82.82,0,0,0,.752-.4l.271.159a1.172,1.172,0,0,1-1.028.537,1.215,1.215,0,0,1-.9-.346,1.289,1.289,0,0,1,0-1.752,1.172,1.172,0,0,1,.878-.35A1.043,1.043,0,0,1,1171.65,1665.714Zm-1.738.71h1.743a.871.871,0,0,0-.285-.575.836.836,0,0,0-.556-.206A.872.872,0,0,0,1169.912,1666.424Z" transform="translate(-1157.691 -1664.407)" fill="#2c2c2c" />
                                    <path id="Path_1719" data-name="Path 1719" d="M1203.007,1665.91a.757.757,0,0,1,.738-.425v.3a.689.689,0,0,0-.738.776v1.3h-.308v-2.336h.308Z" transform="translate(-1186.377 -1664.528)" fill="#2c2c2c" />
                                    <path id="Path_1720" data-name="Path 1720" d="M1226.312,1665.714a1.264,1.264,0,0,1,.322.864c0,.033,0,.084-.009.145h-2.051a.876.876,0,0,0,.93.771.82.82,0,0,0,.752-.4l.271.159a1.172,1.172,0,0,1-1.028.537,1.214,1.214,0,0,1-.9-.346,1.288,1.288,0,0,1,0-1.752,1.171,1.171,0,0,1,.878-.35A1.042,1.042,0,0,1,1226.312,1665.714Zm-1.738.71h1.743a.87.87,0,0,0-.285-.575.835.835,0,0,0-.556-.206A.872.872,0,0,0,1224.574,1666.424Z" transform="translate(-1205.056 -1664.407)" fill="#2c2c2c" />
                                    <path id="Path_1721" data-name="Path 1721" d="M1259.371,1666.3v1.434h-.308V1666.3a.589.589,0,0,0-.635-.659c-.448,0-.757.276-.757.869v1.224h-.308V1665.4h.308v.364a.86.86,0,0,1,.785-.42A.873.873,0,0,1,1259.371,1666.3Z" transform="translate(-1233.743 -1664.407)" fill="#2c2c2c" />
                                    <path id="Path_1722" data-name="Path 1722" d="M1288.23,1661.819h-.673v1.416c0,.4.224.369.673.35v.271c-.654.1-.981-.079-.981-.621v-1.416h-.49v-.3h.49v-.561l.308-.093v.654h.673Z" transform="translate(-1259.215 -1660.526)" fill="#2c2c2c" />
                                    <path id="Path_1723" data-name="Path 1723" d="M1333.15,1660.226a.225.225,0,1,1,.318,0A.223.223,0,0,1,1333.15,1660.226Zm0,2.742v-2.336h.308v2.336Z" transform="translate(-1299.357 -1659.638)" fill="#2c2c2c" />
                                    <path id="Path_1724" data-name="Path 1724" d="M1354.453,1666.3v1.434h-.308V1666.3a.589.589,0,0,0-.635-.659c-.448,0-.757.276-.757.869v1.224h-.308V1665.4h.308v.364a.86.86,0,0,1,.785-.42A.873.873,0,0,1,1354.453,1666.3Z" transform="translate(-1316.132 -1664.407)" fill="#2c2c2c" />
                                    <path id="Path_1725" data-name="Path 1725" d="M1404.964,1665.714a1.264,1.264,0,0,1,.322.864c0,.033,0,.084-.009.145h-2.051a.876.876,0,0,0,.93.771.82.82,0,0,0,.752-.4l.271.159a1.172,1.172,0,0,1-1.028.537,1.214,1.214,0,0,1-.9-.346,1.289,1.289,0,0,1,0-1.752,1.172,1.172,0,0,1,.878-.35A1.043,1.043,0,0,1,1404.964,1665.714Zm-1.738.71h1.743a.871.871,0,0,0-.285-.575.836.836,0,0,0-.556-.206A.872.872,0,0,0,1403.226,1666.424Z" transform="translate(-1359.86 -1664.407)" fill="#2c2c2c" />
                                    <path id="Path_1726" data-name="Path 1726" d="M1435.176,1665.765h.327l-.958,2.336h-.374l-.958-2.336h.327l.818,2.014Z" transform="translate(-1386.12 -1664.771)" fill="#2c2c2c" />
                                    <path id="Path_1727" data-name="Path 1727" d="M1465.786,1665.714a1.264,1.264,0,0,1,.322.864c0,.033,0,.084-.009.145h-2.051a.876.876,0,0,0,.93.771.82.82,0,0,0,.752-.4l.271.159a1.172,1.172,0,0,1-1.028.537,1.214,1.214,0,0,1-.9-.346,1.289,1.289,0,0,1,0-1.752,1.172,1.172,0,0,1,.878-.35A1.043,1.043,0,0,1,1465.786,1665.714Zm-1.738.71h1.743a.872.872,0,0,0-.285-.575.836.836,0,0,0-.556-.206A.872.872,0,0,0,1464.049,1666.424Z" transform="translate(-1412.563 -1664.407)" fill="#2c2c2c" />
                                    <path id="Path_1728" data-name="Path 1728" d="M1497.144,1665.91a.757.757,0,0,1,.738-.425v.3a.689.689,0,0,0-.738.776v1.3h-.308v-2.336h.308Z" transform="translate(-1441.249 -1664.528)" fill="#2c2c2c" />
                                    <path id="Path_1729" data-name="Path 1729" d="M1519.654,1665.765h.327l-1,2.551a.977.977,0,0,1-.944.719v-.29c.28.033.5-.131.64-.486l.061-.145-1.047-2.35h.327l.878,1.958Z" transform="translate(-1459.321 -1664.771)" fill="#2c2c2c" />
                                    <path id="Path_1730" data-name="Path 1730" d="M1569.44,1666.41c.392.1.883.205.883.71a.589.589,0,0,1-.238.486.934.934,0,0,1-.607.187.916.916,0,0,1-.9-.537l.262-.154a.638.638,0,0,0,.64.393c.3,0,.537-.117.537-.374,0-.21-.215-.327-.481-.4-.392-.1-.883-.206-.883-.71a.6.6,0,0,1,.224-.477.878.878,0,0,1,.574-.192.862.862,0,0,1,.818.477l-.257.15a.539.539,0,0,0-.561-.327c-.266,0-.49.131-.49.369C1568.959,1666.223,1569.174,1666.34,1569.44,1666.41Z" transform="translate(-1503.412 -1664.407)" fill="#2c2c2c" />
                                    <path id="Path_1731" data-name="Path 1731" d="M1598.137,1665.714a1.263,1.263,0,0,1,.323.864c0,.033,0,.084-.009.145H1596.4a.876.876,0,0,0,.93.771.82.82,0,0,0,.752-.4l.271.159a1.172,1.172,0,0,1-1.028.537,1.215,1.215,0,0,1-.9-.346,1.289,1.289,0,0,1,0-1.752,1.172,1.172,0,0,1,.878-.35A1.042,1.042,0,0,1,1598.137,1665.714Zm-1.738.71h1.743a.872.872,0,0,0-.285-.575.836.836,0,0,0-.556-.206A.872.872,0,0,0,1596.4,1666.424Z" transform="translate(-1527.247 -1664.407)" fill="#2c2c2c" />
                                    <path id="Path_1732" data-name="Path 1732" d="M1628.488,1667.443a1.2,1.2,0,0,1-.35-.874,1.2,1.2,0,0,1,1.229-1.224,1.091,1.091,0,0,1,1.023.612l-.252.145a.819.819,0,0,0-.771-.458.878.878,0,0,0-.654.271.891.891,0,0,0-.266.654.91.91,0,0,0,.266.659.892.892,0,0,0,.654.266.878.878,0,0,0,.789-.458l.257.149a1.158,1.158,0,0,1-1.046.607A1.194,1.194,0,0,1,1628.488,1667.443Z" transform="translate(-1555.023 -1664.407)" fill="#2c2c2c" />
                                    <path id="Path_1733" data-name="Path 1733" d="M1660.3,1667.793a1.205,1.205,0,0,1-.874-.35,1.184,1.184,0,0,1-.355-.874,1.166,1.166,0,0,1,.355-.869,1.247,1.247,0,0,1,1.743,0,1.171,1.171,0,0,1,.36.869,1.212,1.212,0,0,1-1.229,1.224Zm0-.3a.893.893,0,0,0,.654-.266.91.91,0,0,0,.266-.659.891.891,0,0,0-.266-.654.925.925,0,0,0-1.308,0,.89.89,0,0,0-.266.654.909.909,0,0,0,.266.659A.891.891,0,0,0,1660.3,1667.494Z" transform="translate(-1581.829 -1664.407)" fill="#2c2c2c" />
                                    <path id="Path_1734" data-name="Path 1734" d="M1694.957,1666.3v1.434h-.308V1666.3a.589.589,0,0,0-.635-.659c-.448,0-.757.276-.757.869v1.224h-.308V1665.4h.308v.364a.86.86,0,0,1,.785-.42A.873.873,0,0,1,1694.957,1666.3Z" transform="translate(-1611.182 -1664.407)" fill="#2c2c2c" />
                                    <path id="Path_1735" data-name="Path 1735" d="M1725.194,1658.766h.308v3.27h-.308v-.458a1.047,1.047,0,0,1-.944.514,1.164,1.164,0,0,1-.855-.355,1.253,1.253,0,0,1,0-1.738,1.164,1.164,0,0,1,.855-.355,1.047,1.047,0,0,1,.944.514Zm-.92,3.027a.892.892,0,0,0,.654-.266.909.909,0,0,0,.266-.659.891.891,0,0,0-.266-.654.925.925,0,0,0-1.308,0,.891.891,0,0,0-.266.654.909.909,0,0,0,.266.659A.891.891,0,0,0,1724.274,1661.793Z" transform="translate(-1637.261 -1658.706)" fill="#2c2c2c" />
                                </g>
                                <g id="Group_1827" data-name="Group 1827" transform="translate(1061.008 1193.571)">
                                    <g id="Group_1826" data-name="Group 1826" transform="translate(0)">
                                        <path id="Path_1736" data-name="Path 1736" d="M1110.385,1269.083H1071.1l18.959,19.408Z" transform="translate(-1071.096 -1269.083)" fill="#282828" />
                                        <g id="Group_1825" data-name="Group 1825" transform="translate(20.282)">
                                            <path id="Path_1737" data-name="Path 1737" d="M1444.458,1504.7h39.383l-19-19.454Z" transform="translate(-1414.899 -1456.392)" fill="#282828" />
                                            <path id="Path_1738" data-name="Path 1738" d="M1271.645,1296.585l-26.866-27.5-21.749,20.762,26.866,27.5Z" transform="translate(-1223.03 -1269.083)" fill="#282828" />
                                        </g>
                                    </g>
                                </g>
                                <g id="Group_1828" data-name="Group 1828" transform="translate(1103.04 1187.355)">
                                    <path id="Path_1739" data-name="Path 1739" d="M1600.26,1462.778l-3.142,3,19,19.454v-6.216Z" transform="translate(-1568.929 -1430.705)" fill="#999" />
                                    <path id="Path_1740" data-name="Path 1740" d="M1390.728,1227.405h-3.2v-3.273l-1.577-1.614v6.216l26.866,27.5,3.142-3Z" transform="translate(-1385.954 -1222.518)" fill="#999" />
                                </g>
                                <path id="Path_1741" data-name="Path 1741" d="M1108.2,1310.632h-48.747l43.585-41.549h48.747Z" transform="translate(0 -75.511)" fill="#e01042" />
                                <rect id="Rectangle_324" data-name="Rectangle 324" width="48.683" height="6.761" transform="translate(1059.454 1235.12)" fill="#59595b" />
                                <path id="Path_1742" data-name="Path 1742" d="M1467.794,1275.027l-43.649,41.658v-6.761l43.649-41.658Z" transform="translate(-316.008 -74.804)" fill="#bfbfc1" />
                                <path id="Path_1743" data-name="Path 1743" d="M1405.212,1191.21h4.548v1.909h-7.3v-1.347l4.379-6.1h-4.192v-1.909h6.925v1.347Z" transform="translate(-297.218 -1.58)" fill="#231f20" />
                                <path id="Path_1744" data-name="Path 1744" d="M1661.147,1185.737v5.8h-2.021v-5.671c0-1.291-.693-2.04-1.816-2.04-1.254,0-2.04.823-2.04,2.47v5.24h-2.021v-5.671c0-1.291-.636-2.04-1.759-2.04-1.216,0-2.077.842-2.077,2.47v5.24h-2.021v-9.358h2.021v1.123a2.987,2.987,0,0,1,2.676-1.366,2.86,2.86,0,0,1,2.658,1.479,3.128,3.128,0,0,1,2.863-1.479A3.454,3.454,0,0,1,1661.147,1185.737Z" transform="translate(-509.452)" fill="#231f20" />
                                <g id="Group_1829" data-name="Group 1829" transform="translate(1114.367 1181.938)">
                                    <path id="Path_1745" data-name="Path 1745" d="M1472.889,1185.9a2.786,2.786,0,0,1,.7-1.155,2.983,2.983,0,0,1,4.155,0,2.786,2.786,0,0,1,.7,1.155h2.076a4.9,4.9,0,0,0-4.856-3.962,4.9,4.9,0,0,0-4.856,3.962Z" transform="translate(-1470.813 -1181.938)" fill="#231f20" />
                                    <path id="Path_1746" data-name="Path 1746" d="M1478.449,1226a2.788,2.788,0,0,1-.7,1.155,2.984,2.984,0,0,1-4.155,0,2.786,2.786,0,0,1-.7-1.155h-2.076a4.725,4.725,0,0,0,1.356,2.54,5.017,5.017,0,0,0,7,0,4.722,4.722,0,0,0,1.356-2.54Z" transform="translate(-1470.813 -1220.12)" fill="#231f20" />
                                </g>
                                <g id="Group_1830" data-name="Group 1830" transform="translate(1125.934 1182.02)">
                                    <path id="Path_1747" data-name="Path 1747" d="M1601.025,1184.584a2.879,2.879,0,0,1,1.82,1.85h2.076a4.723,4.723,0,0,0-1.356-2.54,4.664,4.664,0,0,0-2.54-1.34Z" transform="translate(-1595.209 -1182.554)" fill="#e01042" />
                                    <path id="Path_1748" data-name="Path 1748" d="M1559.533,1186.442a2.879,2.879,0,0,1,1.82-1.85v-2.028a4.9,4.9,0,0,0-3.9,3.879Z" transform="translate(-1557.457 -1182.562)" fill="#e01042" />
                                    <path id="Path_1749" data-name="Path 1749" d="M1561.353,1227.852a2.878,2.878,0,0,1-1.82-1.85h-2.076a4.9,4.9,0,0,0,3.9,3.879Z" transform="translate(-1557.457 -1220.202)" fill="#e01042" />
                                    <path id="Path_1750" data-name="Path 1750" d="M1602.845,1226a2.879,2.879,0,0,1-1.82,1.85v2.03a4.663,4.663,0,0,0,2.54-1.34,4.722,4.722,0,0,0,1.356-2.54Z" transform="translate(-1595.209 -1220.202)" fill="#e01042" />
                                </g>
                                <g id="Group_1831" data-name="Group 1831" transform="translate(1061.991 1236.992)">
                                    <path id="Path_1751" data-name="Path 1751" d="M1080.582,1597.24v1.434h-.5v-1.383a.487.487,0,0,0-.523-.542c-.355,0-.593.219-.593.673v1.252h-.5v-3.27h.5v1.233a.8.8,0,0,1,.724-.36A.87.87,0,0,1,1080.582,1597.24Z" transform="translate(-1078.456 -1595.264)" fill="#fff" />
                                    <path id="Path_1752" data-name="Path 1752" d="M1109.436,1604.051a1.253,1.253,0,1,1,.874.355A1.188,1.188,0,0,1,1109.436,1604.051Zm.874-.135a.7.7,0,0,0,.519-.21.768.768,0,0,0,0-1.056.745.745,0,0,0-1.037,0,.768.768,0,0,0,0,1.056A.7.7,0,0,0,1110.309,1603.916Z" transform="translate(-1104.989 -1600.935)" fill="#fff" />
                                    <path id="Path_1753" data-name="Path 1753" d="M1142.192,1598.644h-.579v1.121c0,.3.2.294.579.276v.453c-.771.093-1.084-.117-1.084-.729v-1.121h-.43v-.486h.43v-.5l.5-.149v.654h.579Z" transform="translate(-1132.372 -1597.084)" fill="#fff" />
                                    <path id="Path_1754" data-name="Path 1754" d="M1166.786,1603.393a.778.778,0,0,0,1.35.262l.416.243a1.149,1.149,0,0,1-1.023.509,1.262,1.262,0,0,1-.92-.346,1.282,1.282,0,0,1,0-1.757,1.179,1.179,0,0,1,.888-.355,1.1,1.1,0,0,1,.841.36,1.249,1.249,0,0,1,.332.874,1.369,1.369,0,0,1-.019.21Zm1.369-.411a.651.651,0,0,0-.668-.574.678.678,0,0,0-.706.574Z" transform="translate(-1154.537 -1600.935)" fill="#fff" />
                                    <path id="Path_1755" data-name="Path 1755" d="M1199.224,1597.765v-3.41h.5v3.41Z" transform="translate(-1183.103 -1594.355)" fill="#fff" />
                                    <path id="Path_1756" data-name="Path 1756" d="M1218.782,1602.958c.36.08.827.229.818.729a.62.62,0,0,1-.262.528,1.071,1.071,0,0,1-.649.191.972.972,0,0,1-.953-.547l.434-.252a.493.493,0,0,0,.519.336c.266,0,.4-.089.4-.262,0-.15-.2-.238-.444-.3-.35-.089-.822-.229-.813-.72a.629.629,0,0,1,.243-.518,1.026,1.026,0,0,1,1.476.29l-.425.238a.441.441,0,0,0-.439-.266c-.192,0-.341.084-.341.247S1218.54,1602.888,1218.782,1602.958Z" transform="translate(-1199.143 -1600.935)" fill="#fff" />
                                </g>
                                <rect id="Rectangle_325" data-name="Rectangle 325" width="39.29" height="6.216" transform="translate(1061.008 1187.355)" fill="#e01042" />
                            </g>
                        </svg>
                    </div>
                    <div className="block__info--title">
                        <strong>zoomx holding - chuyên viên thiết kế</strong>
                    </div>
                    <div className="block__info--address">
                        <div className="icon">
                            <svg width="24px" height="24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
                            </svg>
                        </div>
                        <div className="value">
                            <p>Hà Nội</p>
                        </div>
                    </div>
                    <div className="block__info--salary">
                        <div className="icon">
                            <img width="24px" height="24px" src={icon_money} alt="" />
                        </div>
                        <div className="value">
                            <p> 7.000.000đ-12.000.000đ</p>
                        </div>
                    </div>
                    <hr />
                    <div className="block__info--deadline">
                        <p>Hạn chót nhận hồ sơ: <span>{moment(data?.dateReceived).format("DD/MM/YYYY")}</span></p>
                    </div>
                </div>
                <div className="block__bottom"></div>
            </div>
        </div>
    )
}