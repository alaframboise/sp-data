let _filter = require( 'lodash/filter' );
let classData = require( './class-data-mapped' );

let daoFactory = ( daoName ) => {
  return {
    get: id => {
      return classData[ daoName ].find( item => item.id === (id+'') );
    },

    size: () => classData[ daoName ].length,

    list: ( criteria ) => {
      return _filter( classData[ daoName ], criteria );
    }
  };
};

let payeesDAO = daoFactory( 'payees' ),
  accountsDAO = daoFactory( 'accounts' ),
  peopleDAO = daoFactory( 'people' ),
  categoriesDAO = daoFactory( 'categories' ),
  txDAO = daoFactory( 'tx' ),
  staticData = classData[ 'staticData' ];

module.exports = { categoriesDAO, staticData, accountsDAO, peopleDAO, payeesDAO, txDAO };
