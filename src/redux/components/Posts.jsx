import React, { Component } from "react";
import PropTypes from "prop-types";
//to subscribe to the redux store
import { connect } from "react-redux";
//Post actions - import action just like how u would do in RTK
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.newPost) {
  //     this.props.posts.unshift(nextProps.newPost);
  //   }
  // }

  render() {
    //the props.posts is accessing the store state from mapStateToProps
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

//a replacement to useSelector to access the store state
//basically mapping store state as props to this component
const mapStateToprops = (state) => ({
  //we use state.posts because posts is a reducer in the rootreducer
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToprops, { fetchPosts })(Posts);
