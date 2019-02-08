import React from 'react';

const VideoDetail = ({ selectedVideo }) => {
	console.log(selectedVideo);
	if (!selectedVideo) {
		return <div>Loading...</div>
	}
	const embedUrl = `https://youtube.com/embed/${selectedVideo.id.videoId}`;
	const sourceUrl = `https://youtube.com/watch?v=${selectedVideo.id.videoId}`;

	return (
		<div>
			<div className="ui embed">
				<iframe src={embedUrl} title='video player'/>
			</div>
			<div className="ui segment">
				<a target="_blank" rel="noopener" href={sourceUrl}>
					<h4 className="ui header">{selectedVideo.snippet.title}</h4>
				</a>
				<p>{selectedVideo.snippet.description}</p>
			</div>
		</div>
	);
}

export default VideoDetail;