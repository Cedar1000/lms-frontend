import thumb from '../assets/dummy/thumb.png';
import insta from '../assets/dummy/insta.png';
import bible from '../assets/dummy/bible.mp4';
import drift from '../assets/dummy/drift.mp4';
import war from '../assets/dummy/war.mp4'
import ReactPlayer from "react-player";

export const VideoList = ({ videos }) => {
  return (
    <div>
      {videos.map((video, index) => (
        <div key={index}>
          <h2>{video.title}</h2>
          <ReactPlayer url={video.url} controls={true} />
        </div>
      ))}
    </div>
  );
};

export const random = [
    {
        title: 'Ep 6: Living to Serve | SEARCH ON',
        author: 'James Gouse',
        time: '1M views . 3 years ago',
        src: [thumb],
        url: [war],
    },
    {
        title: 'Ep 6: Living to Serve | SEARCH ON',
        author: 'Marcus Levin',
        time: '1M views . 3 years ago',
        src: [insta],
        url: [drift],
    },
    {
        title: 'Ep 6: Living to Serve | SEARCH ON',
        author: 'James Gouse',
        time: '1M views . 3 years ago',
        src: [thumb],
        url: [bible],
    },
    {
        title: 'Ep 6: Living to Serve | SEARCH ON',
        author: 'Marcus Levin',
        time: '1M views . 3 years ago',
        src: [insta],
        url: [drift],
    },
    {
        title: 'Ep 6: Living to Serve | SEARCH ON',
        author: 'James Gouse',
        time: '1M views . 3 years ago',
        src: [thumb],
        url: [war],
    },
    {
        title: 'Ep 6: Living to Serve | SEARCH ON',
        author: 'Marcus Levin',
        time: '1M views . 3 years ago',
        src: [insta],
        url: [drift],
    },
    {
        title: 'Ep 6: Living to Serve | SEARCH ON',
        author: 'James Gouse',
        time: '1M views . 3 years ago',
        src: [thumb],
        url: [bible],
    },
    {
        title: 'Ep 6: Living to Serve | SEARCH ON',
        author: 'Marcus Levin',
        time: '1M views . 3 years ago',
        src: [insta],
        url: [drift],
    },
    {
        title: 'Ep 6: Living to Serve | SEARCH ON',
        author: 'James Gouse',
        time: '1M views . 3 years ago',
        src: [thumb],
        url: [bible],
    },
]