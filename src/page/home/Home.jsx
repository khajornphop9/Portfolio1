import React from "react";
import Layout from "../../Layout";
import ImgProfile from "../../assets/FB_IMG_Hero.jpg";

const Home = () => {
  return (
    <Layout>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={ImgProfile} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-3xl font-bold">
              HELLO THERE, I'M KAMONTODSAPON KONGSANG
            </h1>
            <p class="py-6">
              I’m motivated to acquire new skills and knowledge in order to
              effectively address challenges and enhance my performance in my
              current role, thus enabling me to work more efficiently and
              productively.
            </p>
            <button class="btn btn-primary">About me</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
