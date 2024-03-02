export default function Landing () {
    return (
    <div style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        boxSizing: 'border-box',
        padding: 0,
        margin: 0,
        height: '100%',
        width: '100%',
        background: 'linear-gradient(#2C3968, #5771CE)',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'grid',
        gridTemplateAreas: `
          "title"
          "battery"
          "info"`,
        gridGap: '20px',
        justifyItems: 'center',
        maxWidth: '600px',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          gridArea: 'title',
          fontSize: '2em',
          alignSelf: 'center'
        }}>Title</div>
        <div style={{
          gridArea: 'battery',
          width: '100%',
          height: '30px',
          border: '2px solid white',
          borderRadius: '15px',
          position: 'relative',
          overflow: 'hidden',
          alignSelf: 'center'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '77%', /* Adjust this to change the battery level */
            backgroundColor: 'limegreen',
            alignSelf: 'center'
          }} />
        </div>
        <div style={{
          gridArea: 'info',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          width: '100%',
          alignSelf: 'center'
        }}>
          <input type="text" style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            textAlign: 'center',
            alignSelf: 'center'
          }} />
          <input type="text" style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            textAlign: 'center',
            alignSelf: 'center'
          }} />
        </div>
      </div>
    );
}

