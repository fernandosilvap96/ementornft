import Image from "next/image";
import {
  RiInstagramFill,
  RiTwitterFill,
  RiFacebookCircleFill,
  RiShip2Fill,
} from "react-icons/ri";
import { SiDiscord } from "react-icons/si";
import styles from "./Footer.module.scss";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className={styles._spacing}
      >
        <a className={styles.link} href='https://twitter.com/CryptoFools_NFT'>Twitter</a>
        <a className={styles.link} href='https://discord.com/invite/yPdUgrSfvF'>Discord</a>
        <Grid item xs={12} md={6}>
          <Typography
            variant="subtitle1"
            align="center"
            style={{ fontWeight: "bold", padding: "0 3px" }}
          >
            &copy; {new Date().getFullYear()} Copyright Crypto Fools. Created by Fool Labs. Very few rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default Footer;
