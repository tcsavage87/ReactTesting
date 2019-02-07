import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
	console.log(videos);
	const renderedList = videos.map(video => {
		return (
			<VideoItem 
				onVideoSelect={onVideoSelect} 
				video={video} 
				key={video.videoId} 
			/>
		);
	});
	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;