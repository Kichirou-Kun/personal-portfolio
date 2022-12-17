import Container from "@ui/Container";
import Typography from "@ui/Typography";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-SECONDARY_DARK border-t border-gray-700 bg-BODY_BG py-10">
      <Container>
        <Typography className="text-center text-SECONDARY_COLOR">
          Copyright © <span>{new Date().getFullYear()}</span> Aung Nyein Htet |
          All Rights Reserved
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
