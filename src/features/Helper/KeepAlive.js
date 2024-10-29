import React, { useEffect } from "react";
import axios from "axios";

function KeepAlive() {
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        await axios.get(`${process.env.REACT_APP_API_URL}/users`);
        // console.log("API chamada para manter conexão ativa.");
      } catch (error) {
        // console.error("Erro ao manter a API ativa:", error);
      }
    }, 1 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return null;
}

export default KeepAlive;
