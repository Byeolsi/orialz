/* eslint-disable no-unused-vars */
import React from 'react';
import VideoJS from '../components/VideoJS';
import videojs from 'video.js';
import './VideoDetail.css';
import data3 from './data3.json';
import axios from 'axios';

const VideoDetail = () => {
	const playerRef = React.useRef(null);
	const index = React.useRef(0);
	const imgRef = React.useRef(null);
	const canvasRef = React.useRef(null);
	const videoCanvasRef = React.useRef(null);

	async function getData() {
		try {
			//응답 성공
			const response = await axios.get("https://test.orialz.com/hls/streaming/4/output.m3u8",{
			});
			console.log(response);
		} catch (error) {
			//응답 실패
			console.error(error);
		}
	}
	getData();

    const videoJsOptions = {
		autoplay: true,
		controls: true,
		// responsive: true,
		// fluid: true,
		userActions: {
			click: false,
			doubleClick: false,
		},
		controlBar:{
			pictureInPictureToggle: false,
			fullscreenToggle: false,
		},
		sources: [{
			src: 'https://test.orialz.com/hls/streaming/3/output.m3u8',
			type: 'application/x-mpegURL'
		}]
    };
	
	const handlePlayerReady = (player) => {
		playerRef.current = player;
	
		// You can handle player events here, for example:
		player.on('waiting', () => {
		  videojs.log('player is waiting');
		});
	
		player.on('dispose', () => {
		  videojs.log('player will dispose');
		});
	};

	
	return (
		<div className="video-detail-container">
			<div className="videojs-container">
		  		<VideoJS options={videoJsOptions} onReady={handlePlayerReady} blurData={data3}/>	
			</div>
		</div>
	);
};

export default VideoDetail;