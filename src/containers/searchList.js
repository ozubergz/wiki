import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../components/loader';
import styled from '@emotion/styled';

const Wrapper = styled.ul`
  background: ${props => props.theme.background};
`;

class SearchList extends Component {
  
  renderList(data) {
    return data.titles.map((title, i) => {
      return (
        <li className="lists" key={title}>
          <a className="links" href={data.links[i]}>{title}</a>
          <p className="infos">{data.infos[i]}</p>
        </li>
      )
    });
  }

  render() {
    const { results } = this.props;
    const loading = results.isLoading;
    
    if(loading) {
      return <Loader />
    }
    
    return (
      <Wrapper className="list-group">
        {this.renderList(results)}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { results: state.results }
}

export default connect(mapStateToProps)(SearchList);