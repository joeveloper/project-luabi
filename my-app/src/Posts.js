import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/posts";

class Posts extends Component {
  constructor() {
    super();
  }
  UNSAFE_componentWillMount() {
    this.props.fetchPosts();
  }
  handleClick = e => {
    console.log(e.target.id);
  };
  render() {
    const posts = this.props.posts.map((post, key) => {
      let no = 0;
      const { _id, title, content } = post;
      no++;
      return (
        <div key={key}>
          <h2>
            {no}
            {title}
          </h2>
          <p>{content}</p>
          <p>
            <button onClick={this.handleClick} id={_id}>
              delete
            </button>
          </p>
        </div>
      );
    });
    return (
      <div>
        <h2>Fetch Posts</h2>
        {posts}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postsReducer.posts
  };
};

export default connect(mapStateToProps, { fetchPosts })(Posts);
