import React from "react";

import Banner from "@/containers/Banner/Banner";
import Contacto from "@/containers/Contacto/Contacto";
import Footer from "@/containers/Footer/Footer";
import { Alert, Stack } from "@mui/material";

export default function Home() {

  return (
    <>
    <section>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="warning">Este sitio se encuentra en construcción, usted está previsualizando la versión BETA</Alert>
    </Stack>
    </section>
      <section>
        <Banner/>
        <Contacto/>
        <Footer/>
      </section>
    </>
  );
}
