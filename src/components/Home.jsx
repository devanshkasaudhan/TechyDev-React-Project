import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div className="Home" id="home">
        <main>
          <h1>Techydev</h1>
          <p>An enthusiastic web devloper with diffrent vibe.</p>
        </main>
      </div>
      <div className="home2" id="About">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3">
        <div>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            autem magnam, ipsa itaque aliquid perferendis, corporis reiciendis
            illo aliquam laborum ex corrupti quidem iure ullam distinctio
            illo aliquam laborum ex corrupti quidem iure ullam distinctio
            numquam ipsam? Et, adipisci fugiat soluta in ut quo eligendi
            exercitationem sunt nobis esse quisquam amet quae voluptas numquam
            magni aut delectus quidem? In Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Et cumque doloremque, quas voluptate
            accusantium veniam dolorem nobis nisi quod dolor natus dolorum.
            Minima maiores recusandae ut voluptatem nihil et corrupti?
          </p>
        </div>
      </div>
      <div className="home4" id="Brands">
        <div>
          <h1>Brands</h1>
          <div className="under">
            <article>
              <div
                style={{
                  animationDelay: "0.3s",
                }}
              >
                <AiFillGoogleCircle />
                <p>Google</p>
              </div>
            </article>
            <article>
              <div
                style={{
                  animationDelay: "0.5s",
                }}
              >
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </div>
            </article>
            <article>
              <div
                style={{
                  animationDelay: "0.7s",
                }}
              >
                <AiFillInstagram />
                <p>Instagram</p>
              </div>
            </article>
            <article>
              <div
                style={{
                  animationDelay: "1s",
                }}
              >
                <AiFillYoutube />
                <p>Youtube</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
