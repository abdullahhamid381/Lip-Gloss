import React from 'react'
import "../scss/threecol.scss"
import ProductSlider from './Home/ProductSlider';
import { useSelector } from 'react-redux'
const ThreeCol = () => {
    const items = useSelector((state) => state.allCart.items);
    return (
        <>
            <section className='three__col'>
                <div className="container">
                    <div className="grid">
                        <div className="item">
                            <img src="https://media.istockphoto.com/id/1313233745/photo/abstract-white-stage-on-pink-pastel-background-scene-with-wave-curve-cute-3d-rendering-for.jpg?s=612x612&w=0&k=20&c=xdlSC4N6iXR86XW8RFRfomeBh4dOHq3kI0Sh88QjUGk=" alt="" />
                        </div>
                        <div className="item">
                            <div className="content">
                                <h2>Heading of this Section</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nesciunt vero optio voluptatem culpa eveniet tempore esse ea facilis, ad suscipit soluta.</p>
                                <button>Shop Now!</button>
                            </div>
                        </div>
                        <div className="item">
                            <img src="https://media.istockphoto.com/id/1217825070/photo/red-purple-pink-lipstick-on-terracotta-pink-background.jpg?s=612x612&w=0&k=20&c=cMJEeTrgtm17WTQbKzzEol0LzMRlwLtRJio7Gd_-hCA=" alt="" />
                        </div>
                    </div>
                </div>

            </section>
            <section className="two__col">
                <div className="container">
                    <div className="grid">
                        <div className="item">
                            <figure>
                                <img src="https://images.unsplash.com/photo-1629684027309-92e2cc2de5ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            </figure>

                        </div>
                        <div className="item">
                            <div className="content">
                                <h2>
                                    Heading of this section
                                </h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora non odit, iusto pariatur fugit numquam voluptas ullam. Consectetur asperiores, maxime libero ab debitis quisquam nobis ut velit est atque tempore!
                                </p>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <ProductSlider data={items.filter(item => item.cata === 'collection first')} title={'CHECKOUT OUR BEST SELLERS'} para={'Our #LNPBabes Rave About These Products'} />
            <section className="banner__">
                <div className="container">
                    <div className="grid">
                        <div className="start">
                            <h2>Heading of this section</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, facere tenetur sed corrupti dolore ipsam modi exercitationem? Iusto ducimus vero enim nostrum eos necessitatibus quis. Minus assumenda in aut voluptates.</p>
                            <button>Shop Now!</button>
                        </div>
                        <div className="end">
                            <img src="https://images.unsplash.com/photo-1556942040-df93bd3bdd19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXR5JTIwZmFjZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='three__col__two'>
                <div className="container">
                    <div className="grid">
                        <div className="item">
                            <img src="https://media.istockphoto.com/id/1193268916/photo/nail-varnish-bottle-falls-with-splattery-into-strawberry-yoghurt.jpg?s=612x612&w=0&k=20&c=8j5W6q4AaHdnQJuFKHNcQ73aCl99Ph2J2M-ZqFAT5Lk=" alt="" />
                            <div className="content">
                                <h2>Heading of this Card</h2>
                                <button>Shop Now!</button>
                            </div>
                        </div>
                        <div className="item">
                            <img src="https://media.istockphoto.com/id/1287030562/photo/essential-oil.jpg?s=612x612&w=0&k=20&c=WuNDwxPG8Fye3W138lo0N3Si20ANx2_oYwaZFIkIYPI=" alt="" />
                            <div className="content">
                                <h2>Heading of this Card</h2>
                                <button>Shop Now!</button>
                            </div>
                        </div>

                        <div className="item">
                            <img src="https://media.istockphoto.com/id/1483086054/photo/white-cream-tube-in-pink-water-with-shadows-beauty-concept-top-view.jpg?s=612x612&w=0&k=20&c=rgF0Y2kbh0dYFEweAKH_nUUf74jmphZPnccpFtUBfk8=" alt="" />
                            <div className="content">
                                <h2>Heading of this Card</h2>
                                <button>Shop Now!</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div className="heading__">
                <h2>BEST SELLERS HEADING</h2>
            </div>
            <ProductSlider data={items.filter(item => item.cata === 'collection second')} title={'CHECKOUT OUR BEST SELLERS'} para={'Our #LNPBabes Rave About These Products'} />
            <section className="two__col__two">
                <div className="container">
                    <div className="grid">
                        <div className="item">
                            <figure>
                                <img src="https://images.unsplash.com/photo-1629684027309-92e2cc2de5ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWwlMjBmYWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                            </figure>

                        </div>
                        <div className="item">
                            <div className="content">
                                <h2>
                                    Heading of this section
                                </h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora non odit, iusto pariatur fugit numquam voluptas ullam. Consectetur asperiores, maxime libero ab debitis quisquam nobis ut velit est atque tempore!
                                </p>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ThreeCol;
