<template>
  <section id="authorsBlock">
      <!-- On click on buttons "like" & "comment": sort the authors by their number of like or comment -->
      <article id="authorsButton">
          sort by:
          <button @click="clickLike" id="clickLike"><i class="far fa-thumbs-up"></i></button>
          <button @click="clickComment" id="clickComment"><i class="far fa-comment-alt"></i></button>
      </article>

      <article id="authors">
        <!-- render each authors from the authors.json file with their informations (name, picture, ...) and design the css -->
        <ul id="authorsList">
          <li v-for="author in authors" :key="author.name">
            <p id="profileName">{{ author.name }}</p>
            <p id="profilePicture"><img :src="author.profile_picture"/></p>
            <p id="profileLike"><i class="far fa-thumbs-up"></i>{{ author.like }}</p>
            <p id="profileComment"><i class="far fa-comment-alt"></i>{{ author.comment }}</p>
          </li>
        </ul>
      </article>
  </section>
</template>

<script>

// import the json "authors.json", path: src/json/authors.json
import json from "../json/authors.json";

// store values of "authors.json"
let authors = json;

// variable to allow reverse sorting on multiple click
let reverseSortLike = false;
let reverseSortComment = false;

// function to sort authors by key value
function sortBy(key) {
  if (key === "like") {
    if (reverseSortLike === true) {
      authors.sort((a ,b) => {
        return a[key] - b[key];
      });
      reverseSortLike = false;
    } else {
      authors.sort((a ,b) => {
        return b[key] - a[key];
      })
      reverseSortLike = true;
    }
  } else if (key === "comment") {
    if (reverseSortComment === true) {
      authors.sort((a ,b) => {
        return a[key] - b[key];
      });
      reverseSortComment = false;
    } else {
      authors.sort((a ,b) => {
        return b[key] - a[key];
      })
      reverseSortComment = true;
    }
  }
}

export default {
    name: "Authors",
    data() {
        return {
          authors
        };
    },
    computed: {},
    methods: {
      clickLike() {
        sortBy("like");
      },
      clickComment(){
        sortBy("comment");
      }
    },
};
</script>

<!-- Add your CSS -->
<style >
  body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #d4d2d4;
    font-family: 'Roboto', sans-serif;
  }
  #authorsBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.6rem 0.8rem;
    border-radius: 1rem;
  }
  #authorsButton {
    margin-top: 2vh;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  button {
    width: 10vw;
    height: 5vh;
    margin-right: 1rem;
    border: none;
    border-radius: 2rem;
    background: #d4d2d4;
    box-shadow:  20px 20px 60px #b4b3b4,
    -20px -20px 60px #f4f2f4;
    font-size: 1.4rem;
  }
  button:hover {
    border-radius: 2rem;
    background: linear-gradient(145deg, #bfbdbf, #e3e1e3);
    box-shadow:  20px 20px 60px #b4b3b4,
    -20px -20px 60px #f4f2f4;
  }
  #clickLike {
    color: rgb(66, 133, 244);
  }
  #clickComment {
    color: #744C63;
  }
  ul {
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  li {
    width: 70vw;
    height: 12vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0.4rem 0;
    padding: 0.5rem;
    border-radius: 2rem;
    background: #d4d2d4;
    box-shadow: inset -20px 20px 60px #b4b3b4,
    inset 20px -20px 60px #f4f2f4;
    list-style-type: none;
  }
  li p {
    width: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.4rem;
  }
  #profileName {
    padding-left: 0.5rem;
    font-size: 1.5rem;
  }
  #profilePicture {
    width: 30vw;
  }
  .fa-thumbs-up {
    color: rgb(66, 133, 244);
  }
  .fa-comment-alt {
    color: #744C63;
  }
  li p i {
    padding-right: 0.5rem;
  }
  img {
    width: auto;
    height: 10vh;
    border-radius: 0.6rem;
  }
  @media only screen and (max-width: 600px) {
    ul {
      width: 95vw;
    }
    li {
      width: 90vw;
    }
    #profileName {
      font-size: 1rem;
    }
    #profileLike {
      font-size: 1rem;
    }
    #profileComment {
      font-size: 1rem;
    }
  }
</style>
