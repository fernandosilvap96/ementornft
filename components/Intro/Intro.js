import styles from "./Intro.module.scss";
import Button from "../../global/Button/Button";

const Intro = () => {
  return (
    <div className={styles.intro}>
      <article className={styles._first_intro}>
        <div className={styles._intro_data}>
          <h2 className={styles._title}>
            <span>About Crypto Fools</span>
          </h2>
          <p>
Crypto Fools collection is inspired by famous Rage Comics and now we have decided to bring it to the next level. With this Crypty Fools collection, we want to build the largest crypto & NFT enthusiasts community and one of the most widely recognized NFT PFPs. As a wise man once said: everyone is a fool. Yes! No one is really smart except the Almighty God. After thousand of years searching, we still don't know who we really are, where we are from and where we are going to. We may never find out. But on a second thought, perhaps it doesn't matter anymore. Because we are fools! We just live at the moment! Let's have some fun and change the world together!
          </p>
           <h2 className={styles._title}>
            <span>The Foolture</span>
            </h2>
            <p>
              Well, in Crypto Fools' world, Foolture means two things: fools' culture and fools' future. We know it may sound foolish but that's exactly the culture. By joining the Crypto Fools community, we will define and change our Foolture together.
          </p>
                     <h2 className={styles._title}>
            <span>The Collection</span>
            </h2>
            <p>
              33333 Unique Generative Crypto Fools from millions of possibilities. Why so many? Because we want to form a bigger community than ever.
          </p>
                     <h2 className={styles._title}>
            <span>Price: 0.03 ETH</span>
            </h2>
            <p>
              Mint price starts at 0.03 ETH and will increase by 0.01 ETH everyday until sold out. Maximum 10 Crypto Fools per mint. Reveal will be on April 14th.
          </p>
                     <h2 className={styles._title}>
            <span>Mint method: Stealth Mint & Public Mint Only!</span>
            </h2>
            <p>
            We hate gas war where everyone scrambling to mint, fail and get gas wasted. We want to be fair and square so more people will have a chance to mint and don't need to overspend on gas. So without any hype promotion, we open mint to everyone on April Fools' Day.
            </p>
                     <h2 className={styles._title}>
            <span>Copyrights: CC0 License</span>
            </h2>
            <p>
              CC0 means that creators waive those interests in their works and thereby place them as completely as possible in the public domain, so everyone may freely build upon, enhance and reuse the works for any purposes without restriction under copyright or. So basically you can do whatever you want with your Fools without worrying about copyrights.
          </p>
                     <h2 className={styles._title}>
            <span>Utility:</span>
            </h2>
            <p>
              Fools holders will be able to join Fools exclusive club and make decisions for our Foolture. And if there is any Fools derivatives such as Fools' Pets, Fools' Rides, and Fools' Lands, Fools holders will have privileged access to them. In addition, one is the best part is that unique Crypto Fool you own may appear in new episodes of Rage Comics which will be viewed by millions people on the internet.
          </p>
                               <h2 className={styles._title}>
            <span>Roadmaps:</span>
            </h2>
            <p>
              Fools' Pets, Fools' Rides, Fools' Lands, Fools' Dao and blah blah blah. Everything our fools community need is what we will try to build.
          </p>
          
        </div>
      </article>
    </div>
  );
};

export default Intro;
