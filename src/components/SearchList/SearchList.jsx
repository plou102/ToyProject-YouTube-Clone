import axios from "axios"
import React, { useEffect, useState } from "react"
import styles from './SearchList.module.scss'
import calcNum from "../../utils/CalNum"
import calcDate from "../../utils/CalDate"
import calcDuration from "../../utils/CalDuration"
import channelData from '../../data/channel.json'
import videoData from '../../data/video.json'
import { useNavigate } from "react-router-dom"

export default function SearchList({data}) {
  const [channel, setChannel] = useState([]);
  const [video, setVideo] = useState([]);
  const navigate = useNavigate();

  let channelId = data?.snippet.channelId;
  const params = {
    part: 'snippet',
    id: channelId,
    maxResults: 1,
    key: import.meta.env.VITE_API_KEY,
  }

  useEffect(() => {
    async function getData() {
      // const data = await axios.get('https://www.googleapis.com/youtube/v3/channels', { params });
      setChannel(channelData.items);
      setVideo(videoData.items);

    }
    getData();
  }, []);


  const videoThumbnail = data?.snippet.thumbnails.medium.url;
  const channelThumbnail = channel[0]?.snippet.thumbnails.default.url;

  const viewCount = calcNum(video[0]?.statistics.viewCount);
  const publishedAt = calcDate(video[0]?.snippet.publishedAt);
  const duration = calcDuration(video[0]?.contentDetails.duration);

  return (
    <div className={styles.videoContent}>
      <div className={styles.imgContent}>
        <img src={videoThumbnail} alt='video thumbnail' className={styles.thumbnail}></img>
        <p className={styles.duration}>{duration}</p>
      </div>
      <div className={styles.textContent}>
        <h3 onClick={() =>{
          navigate(`/detail/${video[0]?.id}`);
        }}>{data.snippet.title}</h3>
        {/* 조회수랑 기간은 예시로 적어 놓았습니다~~ */}
        <span>조회수 {viewCount}회 <span className={styles.dot_separator}> • </span> {publishedAt} 전</span>
        <div className={styles.channelInfo}>
          <img src={channelThumbnail} alt='channel thumbnail' className={styles.channelThumbnail}></img>
          <span className={styles.channelTitle}>{data.snippet.channelTitle}</span>
        </div>
        <p>{data.snippet.description}</p>
      </div>
    </div>
  )
}