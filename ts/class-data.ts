import classData from './class-data-mapped';
import _filter from 'lodash-es/filter';

const daoFactory = ( daoName ) => {
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

const payeesDAO = daoFactory( 'payees' ),
  accountsDAO = daoFactory( 'accounts' ),
  peopleDAO = daoFactory( 'people' ),
  categoriesDAO = daoFactory( 'categories' ),
  txDAO = daoFactory( 'tx' ),
  staticData = classData[ 'staticData' ];

export { categoriesDAO, staticData, accountsDAO, peopleDAO, payeesDAO, txDAO };
