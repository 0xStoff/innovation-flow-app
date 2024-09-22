export function setLikeByUser(user, dataToLike, allData) {
  let likedData = [...dataToLike.likes];
  const index = likedData.indexOf(user.documentId.toString());
  // console.log(index);
  // console.log(user.documentId);
  let isLiked = likedData.find((id) => id == user.documentId);
  if (!isLiked) likedData.push(user.documentId.toString());
  else {
    likedData.splice(index, 1);
  }

  let getAllData = [...allData];
  const dataIndex = getAllData.indexOf(dataToLike);
  getAllData[dataIndex].likes = likedData;
  // console.log(likedData);
  return likedData;
}

// async function onMovieLike(movie) {
//   try {
//     const data = {
//       data: {
//         likes: movie.likes,
//       },
//     };
//     // console.log(likedMovies);
//     await httpService.put(getUrl(movie._id), data);
//   } catch (err) {
//     throw err;
//   }
// }

export function changeObjectStructure(data) {
  const feedbacks = data.feedbacks.map((u) => {
    const author = {
      id: u.author.documentId,
      username: u.author.username,
    };

    console.log(u)
    const comments = u.comments.map((c) => {
      const likes = c.likes.map((l) => l.documentId);
      return {
        id: c.documentId,
        avatar: "/avatar.png",
        username: c.user.username,
        secondary: c.content,
        likes: likes,
      };
    });

    return {
      id: u.documentId,
      title: u.title,
      content: u.content,
      likes: u.likes.map((l) => l.documentId),
      // likes: [1, 2, 3],
      author: author,
      comments: comments,
    };
  });

  return feedbacks;
}
