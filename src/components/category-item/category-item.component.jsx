import './category-item.styles.scss'


const CategoryItem = ({category}) => {
    const { title, imageUrl } = category
    return (
        <div className={"category-container"}>
            <div style={{backgroundImage: `url(${imageUrl})`}} className={"background-image"} />
            {/*<img src="" alt=""/>*/}
            <div className={"category-body-container"}>
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </div>
    )
}

export default CategoryItem
