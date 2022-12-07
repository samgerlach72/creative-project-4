
const About = () => {
  return (
    <>
        <div class='page'>
            <h1 class = "page-title">About Us</h1>
            <p class = 'intro about'>Hello There! My name is Sam G, and I want to take pictures of you! I started out 10 years ago with just one camera, and a will to show everyone how beautiful we can be. Since then, I have worked tirelessly to build a brand that focusses on you. The costumer! We have grown to a company with 7 emplyees, including me and 2 other photographers. Let us take your pictures! Here are our photographers and their specialties:</p>
            <div class = 'text-and-image switch'>
                <div class = 'text larg-text'> 
                    <p class = 'intro'>Sam G.<br></br>Baby photos, school photos, and weddings.</p>
                </div>
            <div class = 'image-container large-image'><img src={require("../images/about/381926367_b8ee0d6485_c.jpg")} alt='Photo of Groom and child.' class = 'small-photo'/></div>
            </div>
            
            <div class = 'text-and-image'>
                <div class = 'image-container'><img src={require("../images/about/6861366236_423a1571d0_c.jpg")} alt='Photo of Groom and child.' class = 'small-photo'/></div>
                <div class = 'text'> 
                    <p class = 'intro'>Margret M.<br></br>Instagram photos, weddings, and family portraits.</p>
                </div>
            </div>
            
            <div class = 'text-and-image switch'>
                <div class = 'text'> 
                    <p class = 'intro'>Maren H.<br></br>Weddings, personal professional photos, and real-estate photography.</p>
                </div>
            <div class = 'image-container'><img src={require("../images/about/6872425924_05cac4275e_c.jpg")} alt='Photo of Groom and child.' class = 'small-photo'/></div>
            </div>
        </div>
    </>
    );
};

export default About;