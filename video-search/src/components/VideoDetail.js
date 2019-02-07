import React from 'react';

const VideoDetail = ({ selectedVideo }) => {
	console.log(selectedVideo);
	if (!selectedVideo) {
		return <div>Loading...</div>
	}
	const url = `https://youtube.com/embed/${selectedVideo.id.videoId}`;

	return (
		<div>
			<div className="ui embed">
				<iframe src={url}></iframe>
			</div>
			<div className="ui segment">
				<h4 className="ui header">{selectedVideo.snippet.title}</h4>
				<p>{selectedVideo.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoDetail;