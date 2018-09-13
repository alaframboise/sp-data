const classData = require( '../json/class-data' );
const resources = Object.keys( classData );
const fs = require( 'fs' );
const resourceNames = [];

resources.forEach( resource => {
    resourceNames.push( resource );
    const filePath = `../json/${resource}.json`;
    const data = JSON.stringify( classData[ resource ], null, 2 );
    fs.writeFile( filePath, data, null, ( err ) => err ? console.log( `ERROR: ${err}` ) :
      console.log( `Finished writing to ${filePath}` ) );
  }
);

fs.writeFile( '../json/resources.json', JSON.stringify( resourceNames, null, 2 ),
  err => err ? console.error( `ERROR: ${err}` ) :
    console.log( `Wrote resources.json.` ) );

fs.writeFile( './resources.txt', resourceNames.join( '\n' ) + '\n',
  err => err ? console.error( `ERROR: ${err}` ) :
    console.log( `Wrote resources.txt.` ) );
