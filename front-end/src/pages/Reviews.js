
const Reviews = () => {
  return(
    <>
        <div class='page'>
            <h1 class = "page-title">Testimonials</h1>
            <div class = 'text-and-image switch'>
                <div class = 'text'> 
                    <p class = 'intro'>I have been to many photographers in my day, but none of them come close to the attention to detail that I have gotten with Sammy G. You know that he will always go over the top to make you happy.<br></br>-Tim and Amanda</p>
                </div>
            <div class = 'image-container'><img src={require("../images/16488952635_0db09e6aac_c.jpg")} alt='Photo of Groom and child.' class = 'small-photo'/></div>
            </div>
            
            <div class = 'text-and-image'>
                <div class = 'image-container'><img src={require("../images/1031569673_b7d4a978dd_c.jpg")} alt='Photo of Groom and child.' class = 'small-photo'/></div>
                <div class = 'text'> 
                    <p class = 'intro'>Sam struck the perfect balance between making us feel comfortable, and making sure we were in the right positions so that he could make his magic happen. I would recomend him for any photography you might need.<br></br>-Derek and Jessica</p>
                </div>
            </div>
            
            <div class = 'text-and-image switch'>
                <div class = 'text large-text'> 
                    <p class = 'intro'>Sam is a lifesaver. My mother used to be a photographer, and after she passed away I couldn't find anyone with her skills. I'm glad that I found Sam right before my wedding so that he could capture my special day just like my mom would have if she were here.<br></br>-Stephanie</p>
                </div>
            <div class = 'image-container large-image'><img src={require("../images/31315796927_b6d8bca3da_c.jpg")} alt='Photo of Groom and child.' class = 'small-photo'/></div>
            </div>
        </div>
    </>
    );
};

export default Reviews;