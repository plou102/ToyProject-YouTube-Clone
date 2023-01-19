import React, { useState, useEffect } from "react";
import axios from "axios";
import RelatedVideos from "./RelatedVideo";
import Comment from "./Comment";
import styles from "./PlayPage.module.scss";
import Playing from "./PlayVideo/Playing";
import VideoInfo from "./PlayVideo/VideoInfo";
import VideoInfoDetail from "./PlayVideo/VideoInfoDetail";
import { useParams } from "react-router";

export default function PlayPage() {
  // props 내려쓰시면됩니다
  let { id } = useParams();
  return (
    <section className={styles.playPage}>
      <div className={styles.videoInfo}>
        <Playing id={id} />
        <VideoInfo id={id} />
        <VideoInfoDetail id={id} />
        <Comment id={id} />
      </div>
      <div className={styles.related}>
        <RelatedVideos id={id} />
      </div>
    </section>
  );
}
