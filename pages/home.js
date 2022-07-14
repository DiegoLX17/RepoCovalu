import { Image } from "antd";
import React from "react";
import { Button } from "antd";

const Home = () => {
  return (
    <div class="padre">
      <div class="center">
        <div class="image">
          <Image
            preview={{ visible: false }}
            src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
          />
        </div>
        <div class="centro">
          <p>P E R F U M E</p>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <h3>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </h3>
          <div class="cen">
            <p1>$149.99</p1>
            <del>$169.99</del>
          </div>
          <div class="boton">
          <button>Add</button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Home;
