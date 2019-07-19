import React from 'react';

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;
    return (
      <div>
        <h5 className='card-header w-100 text-white bg-primary mb-3'>
          Search History
        </h5>
        <div className='card-body'>
          <ul className='list-unstyled'>
            {history.map((histories, index) => (
              <li key={ index }>
                <p>
                  {histories.searchText} - {histories.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
