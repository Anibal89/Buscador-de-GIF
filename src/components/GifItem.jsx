import {saveAs} from "file-saver"
export const GifItem = ({title, url, id}) => {
    
  const handleDowload = ()=>{
    saveAs(url,title);
   }
    return (
    <>
      <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
        <button onClick={handleDowload} type="button">Descargar</button>
      </div>
    </>
  );
};
