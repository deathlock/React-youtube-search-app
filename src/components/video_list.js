import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const VideoItems = props.videos.map(videos => {
		return <VideoListItem
						onVideoSelect = {props.onVideoSelect}
						key={ videos.etag }
						videos={ videos } />
	});

	return (
			<ul className="col-md-4 list-group">
			{VideoItems}
			</ul>
		);
}

export default VideoList;
