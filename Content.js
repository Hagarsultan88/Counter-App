// Animation On Scroll
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Row, Col } from "react-bootstrap";

// Slider Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

// import '../../assets/scss/content.scss'

 // Images
import img1 from "../../assets/imgs/bg1.png";
import img2 from "../../assets/imgs/bg2.png";
import img3 from "../../assets/imgs/bg3.png";
import img4 from "../../assets/imgs/bg4.png";
import img5 from "../../assets/imgs/bg5.png";

export default function Content() {
  const splideOptions = {
    gap: 2,
    width: 300,
    perPage: 3,
  };

  return (
    <div>

      <p className="good">Some Good text </p>
      <p className="bad">Some Good text </p>
      <div className='parent'>
        <h2>Title A</h2>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
          lobortis nibh. Donec gravida dapibus metus, ut facilisis odio
          tristique semper. Phasellus malesuada vehicula est sed blandit. In at
          tortor dolor. Cras sodales efficitur eros ut ullamcorper. Sed
          facilisis vehicula elit vel ultricies. Fusce nec porttitor velit. Nam
          tincidunt sapien vitae justo fermentum, eu ultricies eros luctus.
          Aliquam placerat tellus at dolor semper, id imperdiet mauris
          porttitor. Morbi ultricies pulvinar sem sed posuere. Phasellus
          ultricies non orci ac congue. Aliquam cursus scelerisque lobortis. In
          at laoreet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec ac enim felis. Vestibulum ut est a purus tristique
          rhoncus. Nulla eleifend risus vel eros suscipit, ac malesuada eros
          viverra. Nunc iaculis vulputate mattis. Donec sodales volutpat ante,
          sit amet consequat velit hendrerit a. Mauris bibendum, diam et pretium
          auctor, est augue aliquet purus, sit amet accumsan enim risus a purus.
          Curabitur sed urna at lorem finibus sagittis. Nullam finibus magna a
          arcu tempus, ut porta arcu posuere. Maecenas finibus finibus pulvinar.
          Donec sit amet sapien in urna ultrices rutrum non et nisi. In
          tristique purus ut purus imperdiet dictum. Fusce vulputate, augue vel
          ornare semper, massa urna viverra lacus, eu feugiat lacus massa
          vulputate odio. Duis in mauris leo. Donec porta nibh at odio
          consequat, eu eleifend nunc lacinia. Maecenas hendrerit orci ut
          vehicula commodo. Sed pellentesque mattis tortor in egestas. Ut mollis
          ultrices quam, eu luctus sem maximus sed. Nulla ut tincidunt nibh. In
          non feugiat tortor. Sed non ligula convallis, aliquet enim quis,
          ornare augue. Morbi ipsum neque, euismod nec ligula id, cursus
          placerat tortor. In neque purus, viverra eget scelerisque vitae,
          tristique eu orci. Pellentesque commodo mauris tempus tortor eleifend
          suscipit. Phasellus malesuada ligula eget augue condimentum, vel
          mattis lectus egestas. Nulla tortor ante, pharetra sit amet dolor in,
          porta posuere enim. In porta pretium massa et accumsan. Maecenas sem
          urna, pulvinar vel vulputate ut, ultricies vel ante. Mauris fringilla
          enim sit amet mauris fringilla, nec sollicitudin ipsum pretium. Aenean
          at tristique justo. Cras sit amet rutrum lectus. Maecenas tristique
          nulla et erat rutrum aliquet. Sed id metus vitae est vulputate varius
          nec sed purus. Vivamus facilisis ex sed elit consectetur, ac
          ullamcorper sapien cursus. Duis cursus odio est, ac dapibus purus
          ultrices et. Maecenas consectetur ante ut est ultricies, sed volutpat
          massa varius. Morbi vehicula lorem in est lacinia tempus. Nunc sed
          aliquam velit, sit amet pellentesque felis. Proin sed facilisis lacus,
          eu egestas ante. Integer cursus et dolor et sagittis.
        </p>
      </div>

      <div className='parent'>
        <AnimationOnScroll
          animateIn="animate__bounceIn"
          animateOnce={true}
          delay="400"
        >
          <h2>Title Animated</h2>
        </AnimationOnScroll>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
          lobortis nibh. Donec gravida dapibus metus, ut facilisis odio
          tristique semper. Phasellus malesuada vehicula est sed blandit. In at
          tortor dolor. Cras sodales efficitur eros ut ullamcorper. Sed
          facilisis vehicula elit vel ultricies. Fusce nec porttitor velit. Nam
          tincidunt sapien vitae justo fermentum, eu ultricies eros luctus.
          Aliquam placerat tellus at dolor semper, id imperdiet mauris
          porttitor. Morbi ultricies pulvinar sem sed posuere. Phasellus
          ultricies non orci ac congue. Aliquam cursus scelerisque lobortis. In
          at laoreet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec ac enim felis. Vestibulum ut est a purus tristique
          rhoncus. Nulla eleifend risus vel eros suscipit, ac malesuada eros
          viverra. Nunc iaculis vulputate mattis. Donec sodales volutpat ante,
          sit amet consequat velit hendrerit a. Mauris bibendum, diam et pretium
          auctor, est augue aliquet purus, sit amet accumsan enim risus a purus.
          Curabitur sed urna at lorem finibus sagittis. Nullam finibus magna a
          arcu tempus, ut porta arcu posuere. Maecenas finibus finibus pulvinar.
          Donec sit amet sapien in urna ultrices rutrum non et nisi. In
          tristique purus ut purus imperdiet dictum. Fusce vulputate, augue vel
          ornare semper, massa urna viverra lacus, eu feugiat lacus massa
          vulputate odio. Duis in mauris leo. Donec porta nibh at odio
          consequat, eu eleifend nunc lacinia. Maecenas hendrerit orci ut
          vehicula commodo. Sed pellentesque mattis tortor in egestas. Ut mollis
          ultrices quam, eu luctus sem maximus sed. Nulla ut tincidunt nibh. In
          non feugiat tortor. Sed non ligula convallis, aliquet enim quis,
          ornare augue. Morbi ipsum neque, euismod nec ligula id, cursus
          placerat tortor. In neque purus, viverra eget scelerisque vitae,
          tristique eu orci. Pellentesque commodo mauris tempus tortor eleifend
          suscipit. Phasellus malesuada ligula eget augue condimentum, vel
          mattis lectus egestas. Nulla tortor ante, pharetra sit amet dolor in,
          porta posuere enim. In porta pretium massa et accumsan. Maecenas sem
          urna, pulvinar vel vulputate ut, ultricies vel ante. Mauris fringilla
          enim sit amet mauris fringilla, nec sollicitudin ipsum pretium. Aenean
          at tristique justo. Cras sit amet rutrum lectus. Maecenas tristique
          nulla et erat rutrum aliquet. Sed id metus vitae est vulputate varius
          nec sed purus. Vivamus facilisis ex sed elit consectetur, ac
          ullamcorper sapien cursus. Duis cursus odio est, ac dapibus purus
          ultrices et. Maecenas consectetur ante ut est ultricies, sed volutpat
          massa varius. Morbi vehicula lorem in est lacinia tempus. Nunc sed
          aliquam velit, sit amet pellentesque felis. Proin sed facilisis lacus,
          eu egestas ante. Integer cursus et dolor et sagittis.
        </p>
      </div>

      <div className='parent'>
        <h2>Title A</h2>
        <Row>
          <Col>
            <AnimationOnScroll animateIn="animate__backInLeft">
              <img src={img1} className="img-fluid" />
            </AnimationOnScroll>
          </Col>
          <Col>
            <AnimationOnScroll animateIn="animate__backInRight">
              <img src={img2} className="img-fluid" />
            </AnimationOnScroll>
          </Col>
        </Row>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
          lobortis nibh. Donec gravida dapibus metus, ut facilisis odio
          tristique semper. Phasellus malesuada vehicula est sed blandit. In at
          tortor dolor. Cras sodales efficitur eros ut ullamcorper. Sed
          facilisis vehicula elit vel ultricies. Fusce nec porttitor velit. Nam
          tincidunt sapien vitae justo fermentum, eu ultricies eros luctus.
          Aliquam placerat tellus at dolor semper, id imperdiet mauris
          porttitor. Morbi ultricies pulvinar sem sed posuere. Phasellus
          ultricies non orci ac congue. Aliquam cursus scelerisque lobortis. In
          at laoreet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec ac enim felis.
        </p>
        <Splide
          options={{
            gap: 2,
            width: 300,
            height: 150,
            perPage: 3,
            arrows: false,
            pagination: false
          }}
        >
          <SplideSlide>
            <img src={img1} />
          </SplideSlide>

          <SplideSlide>
            <img src={img2} />
          </SplideSlide>

          <SplideSlide>
            <img src={img3} />
          </SplideSlide>

          <SplideSlide>
            <img src={img4} />
          </SplideSlide>

          <SplideSlide>
            <img src={img5} />
          </SplideSlide>
        </Splide>

        <p>
          {" "}
          Vestibulum ut est a purus tristique rhoncus. Nulla eleifend risus vel
          eros suscipit, ac malesuada eros viverra. Nunc iaculis vulputate
          mattis. Donec sodales volutpat ante, sit amet consequat velit
          hendrerit a. Mauris bibendum, diam et pretium auctor, est augue
          aliquet purus, sit amet accumsan enim risus a purus. Curabitur sed
          urna at lorem finibus sagittis. Nullam finibus magna a arcu tempus, ut
          porta arcu posuere. Maecenas finibus finibus pulvinar. Donec sit amet
          sapien in urna ultrices rutrum non et nisi. In tristique purus ut
          purus imperdiet dictum. Fusce vulputate, augue vel ornare semper,
          massa urna viverra lacus, eu feugiat lacus massa vulputate odio. Duis
          in mauris leo. Donec porta nibh at odio consequat, eu eleifend nunc
          lacinia. Maecenas hendrerit orci ut vehicula commodo. Sed pellentesque
          mattis tortor in egestas. Ut mollis ultrices quam, eu luctus sem
          maximus sed. Nulla ut tincidunt nibh. In non feugiat tortor. Sed non
          ligula convallis, aliquet enim quis, ornare augue. Morbi ipsum neque,
          euismod nec ligula id, cursus placerat tortor. In neque purus, viverra
          eget scelerisque vitae, tristique eu orci. Pellentesque commodo mauris
          tempus tortor eleifend suscipit. Phasellus malesuada ligula eget augue
          condimentum, vel mattis lectus egestas. Nulla tortor ante, pharetra
          sit amet dolor in, porta posuere enim. In porta pretium massa et
          accumsan. Maecenas sem urna, pulvinar vel vulputate ut, ultricies vel
          ante. Mauris fringilla enim sit amet mauris fringilla, nec
          sollicitudin ipsum pretium. Aenean at tristique justo. Cras sit amet
          rutrum lectus. Maecenas tristique nulla et erat rutrum aliquet. Sed id
          metus vitae est vulputate varius nec sed purus. Vivamus facilisis ex
          sed elit consectetur, ac ullamcorper sapien cursus. Duis cursus odio
          est, ac dapibus purus ultrices et. Maecenas consectetur ante ut est
          ultricies, sed volutpat massa varius. Morbi vehicula lorem in est
          lacinia tempus. Nunc sed aliquam velit, sit amet pellentesque felis.
          Proin sed facilisis lacus, eu egestas ante. Integer cursus et dolor et
          sagittis.
        </p>
      </div>

      <div className='parent'>
        <h2>Title A</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
          lobortis nibh. Donec gravida dapibus metus, ut facilisis odio
          tristique semper. Phasellus malesuada vehicula est sed blandit. In at
          tortor dolor. Cras sodales efficitur eros ut ullamcorper. Sed
          facilisis vehicula elit vel ultricies. Fusce nec porttitor velit. Nam
          tincidunt sapien vitae justo fermentum, eu ultricies eros luctus.
          Aliquam placerat tellus at dolor semper, id imperdiet mauris
          porttitor. Morbi ultricies pulvinar sem sed posuere. Phasellus
          ultricies non orci ac congue. Aliquam cursus scelerisque lobortis. In
          at laoreet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec ac enim felis. Vestibulum ut est a purus tristique
          rhoncus. Nulla eleifend risus vel eros suscipit, ac malesuada eros
          viverra. Nunc iaculis vulputate mattis. Donec sodales volutpat ante,
          sit amet consequat velit hendrerit a. Mauris bibendum, diam et pretium
          auctor, est augue aliquet purus, sit amet accumsan enim risus a purus.
          Curabitur sed urna at lorem finibus sagittis. Nullam finibus magna a
          arcu tempus, ut porta arcu posuere. Maecenas finibus finibus pulvinar.
          Donec sit amet sapien in urna ultrices rutrum non et nisi. In
          tristique purus ut purus imperdiet dictum. Fusce vulputate, augue vel
          ornare semper, massa urna viverra lacus, eu feugiat lacus massa
          vulputate odio. Duis in mauris leo. Donec porta nibh at odio
          consequat, eu eleifend nunc lacinia. Maecenas hendrerit orci ut
          vehicula commodo. Sed pellentesque mattis tortor in egestas. Ut mollis
          ultrices quam, eu luctus sem maximus sed. Nulla ut tincidunt nibh. In
          non feugiat tortor. Sed non ligula convallis, aliquet enim quis,
          ornare augue. Morbi ipsum neque, euismod nec ligula id, cursus
          placerat tortor. In neque purus, viverra eget scelerisque vitae,
          tristique eu orci. Pellentesque commodo mauris tempus tortor eleifend
          suscipit. Phasellus malesuada ligula eget augue condimentum, vel
          mattis lectus egestas. Nulla tortor ante, pharetra sit amet dolor in,
          porta posuere enim. In porta pretium massa et accumsan. Maecenas sem
          urna, pulvinar vel vulputate ut, ultricies vel ante. Mauris fringilla
          enim sit amet mauris fringilla, nec sollicitudin ipsum pretium. Aenean
          at tristique justo. Cras sit amet rutrum lectus. Maecenas tristique
          nulla et erat rutrum aliquet. Sed id metus vitae est vulputate varius
          nec sed purus. Vivamus facilisis ex sed elit consectetur, ac
          ullamcorper sapien cursus. Duis cursus odio est, ac dapibus purus
          ultrices et. Maecenas consectetur ante ut est ultricies, sed volutpat
          massa varius. Morbi vehicula lorem in est lacinia tempus. Nunc sed
          aliquam velit, sit amet pellentesque felis. Proin sed facilisis lacus,
          eu egestas ante. Integer cursus et dolor et sagittis.
        </p>
      </div>

      <div className='parent'>
        <h2>Title A</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget
          lobortis nibh. Donec gravida dapibus metus, ut facilisis odio
          tristique semper. Phasellus malesuada vehicula est sed blandit. In at
          tortor dolor. Cras sodales efficitur eros ut ullamcorper. Sed
          facilisis vehicula elit vel ultricies. Fusce nec porttitor velit. Nam
          tincidunt sapien vitae justo fermentum, eu ultricies eros luctus.
          Aliquam placerat tellus at dolor semper, id imperdiet mauris
          porttitor. Morbi ultricies pulvinar sem sed posuere. Phasellus
          ultricies non orci ac congue. Aliquam cursus scelerisque lobortis. In
          at laoreet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Donec ac enim felis. Vestibulum ut est a purus tristique
          rhoncus. Nulla eleifend risus vel eros suscipit, ac malesuada eros
          viverra. Nunc iaculis vulputate mattis. Donec sodales volutpat ante,
          sit amet consequat velit hendrerit a. Mauris bibendum, diam et pretium
          auctor, est augue aliquet purus, sit amet accumsan enim risus a purus.
          Curabitur sed urna at lorem finibus sagittis. Nullam finibus magna a
          arcu tempus, ut porta arcu posuere. Maecenas finibus finibus pulvinar.
          Donec sit amet sapien in urna ultrices rutrum non et nisi. In
          tristique purus ut purus imperdiet dictum. Fusce vulputate, augue vel
          ornare semper, massa urna viverra lacus, eu feugiat lacus massa
          vulputate odio. Duis in mauris leo. Donec porta nibh at odio
          consequat, eu eleifend nunc lacinia. Maecenas hendrerit orci ut
          vehicula commodo. Sed pellentesque mattis tortor in egestas. Ut mollis
          ultrices quam, eu luctus sem maximus sed. Nulla ut tincidunt nibh. In
          non feugiat tortor. Sed non ligula convallis, aliquet enim quis,
          ornare augue. Morbi ipsum neque, euismod nec ligula id, cursus
          placerat tortor. In neque purus, viverra eget scelerisque vitae,
          tristique eu orci. Pellentesque commodo mauris tempus tortor eleifend
          suscipit. Phasellus malesuada ligula eget augue condimentum, vel
          mattis lectus egestas. Nulla tortor ante, pharetra sit amet dolor in,
          porta posuere enim. In porta pretium massa et accumsan. Maecenas sem
          urna, pulvinar vel vulputate ut, ultricies vel ante. Mauris fringilla
          enim sit amet mauris fringilla, nec sollicitudin ipsum pretium. Aenean
          at tristique justo. Cras sit amet rutrum lectus. Maecenas tristique
          nulla et erat rutrum aliquet. Sed id metus vitae est vulputate varius
          nec sed purus. Vivamus facilisis ex sed elit consectetur, ac
          ullamcorper sapien cursus. Duis cursus odio est, ac dapibus purus
          ultrices et. Maecenas consectetur ante ut est ultricies, sed volutpat
          massa varius. Morbi vehicula lorem in est lacinia tempus. Nunc sed
          aliquam velit, sit amet pellentesque felis. Proin sed facilisis lacus,
          eu egestas ante. Integer cursus et dolor et sagittis.
        </p>
      </div>
    </div>
  );
}
