import React from 'react';

const VideoListItem = ({ videos, onVideoSelect }) => {
	const imageUrl = videos.snippet.thumbnails.default.url;

	return (
			<li className="list-group-item" onClick={() => onVideoSelect(videos)}>
				<div className="video-list media">
						<div className="media-left">
							<img className="media-object" src={ imageUrl } />
						</div>

						<div className="media-body">
							<div className="media-heading">{ videos.snippet.title }</div>
						</div>
				</div>
			</li>
		);
}

export default VideoListItem;
