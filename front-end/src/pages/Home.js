const Home = () => {
  return(
    <>
    <img src={require('../images/10119232616_8a3e3e90c2_o.jpg')} alt='Photo of Bride and Groom.' class = 'large-photo'/>
    <div class='page'>
        <div class = 'text-and-image'>
            <div class = 'text'> 
                <h2>Hello!</h2>
                <p class = 'intro'>Welcome to Sammy G. Photography! We take photos for all of life's special moments. We do weddings, baby photos, family photos, and more. If you have any questions, my team and I are eager and willing to help. We want to make sure that you have the photos to look back on all of the special moments in your life.</p>
            </div>
            <div class = 'image-container'><img src={require('../images/21233029912_cde8398ca8_c.jpg')} class='small-photo'/></div>
        </div>
    </div>
    </>
    );
};

export default Home;