export function setLikeByUser(user, dataToLike, allData) {
  let likedData = [...dataToLike.likes];
  const index = likedData.indexOf(user.id.toString());
  // console.log(index);
  // console.log(user.id);
  let isLiked = likedData.find((id) => id == user.id);
  if (!isLiked) likedData.push(user.id.toString());
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
  const feedbacks = data.feedbacks.data.map((u) => {
    const author = {
      id: u.attributes.users.data.id,
      username: u.attributes.users.data.attributes.username,
    };

    const comments = u.attributes.comments.data.map((c) => {
      const likes = c.attributes.likes.data.map((l) => l.id);
      return {
        id: c.id,
        avatar: "/avatar.png",
        username: c.attributes.user.data.attributes.username,
        secondary: c.attributes.content,
        likes: likes,
      };
    });

    return {
      id: u.id,
      title: u.attributes.title,
      content: u.attributes.content,
      likes: u.attributes.likes.data.map((l) => l.id),
      // likes: [1, 2, 3],
      author: author,
      comments: comments,
    };
  });

  return feedbacks;
}
