import {  Zoom } from "react-awesome-reveal";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const NewsVideos = () => {


    const [text] = useTypewriter({
        words: [
          " Top News",
          
        ],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
      });
 
  const videoData = [
    {
      url: 'https://www.youtube.com/embed/PDMIFXW5QB0?si=6R3imQiCAk-EeOvA',
      headline: 'Colossal sea monster unearthed in UK - BBC News',
    },
    {
      url: 'https://www.youtube.com/embed/sKgF5VnnR-E?si=xXsy-Tyxv3bL6GuH',
      headline: 'Giant dinosaur skull uncovered on UK coast',
    },
    {
      url: 'https://www.youtube.com/embed/FmKes0l0Wkg?si=Px9KTWXXHArVkgtz',
      headline: 'Pristine Pliosaur fossil uncovered in Dorset cliffs',
    },
    {
      url: 'https://www.youtube.com/embed/ERUc4KaWrsk?si=H4Vckj805yrgSTHP',
      headline: 'Cristiano Ronaldo set to become most capped',
    },
    {
      url: 'https://www.youtube.com/embed/RfI602XEEaY?si=DDTlnOKxjJuaPDZ1',
      headline: 'Impact of Russian invasion on global energy, politics',
    },
    {
      url: 'https://www.youtube.com/embed/pCCTf17ZiIs?si=08Y8Wm3HWb0SEP0z',
      headline: 'Twenty Years of Putin Playing the West in 3 Minutes',
    }
  ];


  const createVideoCard = ({ url, headline }) => {
    return (
      <div key={url} className="w-full ">
        <iframe
          src={url}
          title={`News Video ${url}`}
          className="w-full h-48 md:h-64 lg:h-[200px]"
          allowFullScreen
        ></iframe>
        <p className="mt-2 text-sm font-medium">{headline}</p>
      </div>
      
    );
  };

  return (
    <>
    <h1 className="text-3xl text-center text-[#7B1FA2]">Today's <span className="text-2xl text-indigo-700">
          {text} <Cursor cursorStyle="<" />
        </span></h1>
  <Zoom right>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-around  mt-8">
      {videoData.map(createVideoCard)}
    </div>
  </Zoom>
    </>
  );
};

export default NewsVideos;
