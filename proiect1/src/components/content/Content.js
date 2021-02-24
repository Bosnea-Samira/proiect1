import React from "react";
import {Container, Title, Row, List, Img, Description, Contact} from "./Content.style";


const Content = () => {
    return (
        <Container>
            
         <Description>
            <Img src="https://cdn.theculturetrip.com/wp-content/uploads/2018/04/24294111_2000423446846260_3092229352695932706_n.jpg"/>
           
            <p>Hello, our lovely coffee shop is open for for people that love to relax while drinking coffee and playing with cats. We invite you to come along our journey.<br/>
            Cat cafes can be found in most major cities, but they are often not located at street level but on higher floors in multi-story buildings and not always easily found.
            With pet ownership in the city difficult due to small living quarters, strict rental agreements and busy lifestyles, such cafes are popular with locals as well as overseas visitors who love the company of cats.<br/> 
            Reservations are not typically required, although it may be prudent to call in advance at the more popular ones. Note that most places restrict entry to visitors above the age of 14.
            </p>
      </Description>
      <Title>
        <h3>Time to relax with our furry friends</h3>
      </Title>
      <Row>
      <List>
        <ul>
      <Img src="https://i2-prod.manchestereveningnews.co.uk/incoming/article11682241.ece/ALTERNATES/s1200b/JS95909245.jpg"/>
      <Img src="https://images.squarespace-cdn.com/content/v1/59014ed8db29d637250fa476/1572314465654-P4PA4BTGYWV1RA1CH2R6/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/MewsicKitty-21.jpg?format=1000w"/>
      <Img src="http://animalcafes.com/pix/800-kuni-yaho.jpg"/>
      <Img src="https://theplanetsworld.com/travel-inspiration/13-of-cutest-cat-cafes-around-world-6.jpg"/>
      </ul>
        </List>
      </Row>
     <Title>
       <h3>Play with our friend and you a discount!</h3>
     </Title>
     <Description>
     <p>
             Prices are getting lower and lower if you play and enjoy your free time with our lovely cats... :)
           <h4>From 2.55 € the product to 1.75  €!</h4>
           <h5>Half the price just for sharing some quality time with our LAZY CATS!</h5>
     </p>
            <Img src="https://www.scope.travel/static/3b8a6d5563999c2d0795637a59c7bb05/fa127/japan-tokyo-cat-cafe-mocha-girl-cage-platform-cat.jpg"/>
      </Description>
      <Description>
            <Img src="http://cafebistro.lk/wp-content/uploads/2020/06/14608694_f1024.jpg"/>
            <p>
            <h1>The best coffees in Town</h1>
          </p>
      </Description>
      <Description>
      <p>
            <h1>And of course the best pastries!</h1>
          </p>
            <Img src="http://justfunfacts.com/wp-content/uploads/2018/03/pastries.jpg"/>
      </Description>
      <Contact>
        <ul>
          <p>
            <h1>Location</h1>
          <h3>You can find us in Narnia, 25th Avenue.</h3>
          <Img src="https://static-maps.yandex.ru/1.x/?lang=en_US&size=520%2C440&l=map&spn=0.003460%2C0.002000&ll=25.269097%2C54.687592"/>
        </p>
        </ul>
        <ul>
         <p>
          <h1>Open</h1>
          <h3>Monday-Thursday from 8 am to 6 pm</h3>
          <h3>Friday from 8 am to 8 pm</h3>
          <h3>Saturday from 8 am to 4 pm</h3>
          <h3>Sunday from 8 am to 2 pm</h3>
           </p>
        </ul>
        <ul>
          <p>
            <h1>Contact us</h1>
            <h3>Email: lazycat@gmail.com</h3>
            <h3>Tel: 0000000000</h3>
            <h3>Mob: 0000000001</h3>


          </p>
        </ul>
        
      </Contact>        
        </Container>
    )
    
}


export default Content;