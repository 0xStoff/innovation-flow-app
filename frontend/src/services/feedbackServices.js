export function setLikeByUser(user, dataToLike, allData) {
    let likedData = [...dataToLike.likes];
    const index = likedData.indexOf(user.id.toString());
    let isLiked = likedData.find((id) => id == user.id);
    if (!isLiked) likedData.push(user.id.toString()); else {
        likedData.splice(index, 1);
    }

    let getAllData = [...allData];
    const dataIndex = getAllData.indexOf(dataToLike);
    getAllData[dataIndex].likes = likedData;
    // console.log(likedData);
    return likedData;
}


export function changeObjectStructure(data) {
    const feedbacks = data.feedbacks.map((u) => {
        const author = {
            id: u.author.documentId, username: u.author.username,
        };

        const comments = u.comments.map((c) => {
            const likes = c.likes.map((l) => l.documentId);
            return {
                id: c.documentId, avatar: "/avatar.png", username: c.user.username, secondary: c.content, likes: likes,
            };
        });

        return {
            id: u.documentId,
            title: u.title,
            content: u.content,
            likes: u.likes.map((l) => l.documentId),
            author: author,
            comments: comments,
        };
    });

    return feedbacks;
}
