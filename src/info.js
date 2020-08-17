import React from "react";
import { Table } from "react-bootstrap";

const Info = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h3>Tuhkatie 8, Vahto</h3>
      <br></br>
      <Table bordered>
        <tbody>
          <tr>
            <td>Kuntotarkastus suoritettu</td>
            <td>
              11.3.2020. Rakennusinsinööri Mika Salminen, Suomen
              Rakennusasiantuntijat Oy.
            </td>
          </tr>
          <tr>
            <td>Rakennuksen pinta-ala</td>
            <td>102m²</td>
          </tr>
          <tr>
            <td>Käyttöönottovuosi</td>
            <td>2011</td>
          </tr>
          <tr>
            <td>Rakennustapa</td>
            <td>Elementtirakenteinen</td>
          </tr>
          <tr>
            <td>Runkomateriaali</td>
            <td>Puurankarunko</td>
          </tr>
          <tr>
            <td>Perustukset</td>
            <td>Anturaperustus ja harkkoperusmuuri</td>
          </tr>
          <tr>
            <td>Alapohjarakenteet</td>
            <td>Ryömintätilainen puurakenteinen alapohja</td>
          </tr>
          <tr>
            <td>Julkisivumateriaali</td>
            <td>Panelointi</td>
          </tr>
          <tr>
            <td>Yläpohja ja vesikate</td>
            <td>Harjakatto, betonitiili</td>
          </tr>
          <tr>
            <td>Lämmöntuotto ja -jako</td>
            <td>
              Huonekohtainen sähkölämmitys seinäpatterein, märkätiloissa
              lattialämmitys. Avustavana lämmönlähteenä ilmalämpöpumppu, joka on
              asennettu 2015.
            </td>
          </tr>
          <tr>
            <td>Tulisijat</td>
            <td>Takka</td>
          </tr>
          <tr>
            <td>Ilmanvaihtojärjestelmä</td>
            <td>Koneellinen tulo- ja poisto lämmön talteenotolla</td>
          </tr>
          <tr>
            <td>Vesi- ja viemärijärjestelmä</td>
            <td>Kunnallinen vesijohto- ja viemäriliittymä</td>
          </tr>
          <tr>
            <td>Lämmin käyttövesi</td>
            <td>Tekniseen tilaan sijoitettu sähkötoiminen varaaja vastuksin</td>
          </tr>
          <tr>
            <td>Kiinteistötunnus</td>
            <td>704-437-3-39</td>
          </tr>
          <tr>
            <td>Tontin pinta-ala</td>
            <td>1200m²</td>
          </tr>
          <tr>
            <td>Muut rakennukset</td>
            <td>Autotalli 59m²</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Info;
