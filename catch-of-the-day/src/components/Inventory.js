import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {

    constructor() {
        super();
        this.renderInventory = this.renderInventory.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, key) {
        const fish = this.props.fishes[key];

        const updatedFish = {...fish,
            [e.target.name]: e.target.value
        }

        console.log(updatedFish);

        this.props.updateFish(key, updatedFish);

    }

    renderInventory(key) {
        const fish = this.props.fishes[key];
        return (<div className="fish-edit" key={key}>
                    <input type="text" value={fish.name} name="name" placeholder="Fish name"
                        onChange={(e) => this.handleChange(e, key)}/>
                    <input type="text" value={fish.price} name="price" placeholder="Fish price"
                        onChange={(e) => this.handleChange(e, key)}/>
                    <select ref={(input) => this.status = input} value={fish.status}
                        onChange={(e) => this.handleChange(e, key)}>
                        <option value="available">Fresh!</option>
                        <option value="unavailable">Sold Out!</option>
                    </select>
                    <textarea type="text" value={fish.desc} name="desc" placeholder="Fish desc"
                        onChange={(e) => this.handleChange(e, key)}/>
                    <input type="text" value={fish.image} name="image" placeholder="Fish image"
                        onChange={(e) => this.handleChange(e, key)}/>
                    <button onClick={() => this.props.removeFish(key)}></button>
                </div>)
            }

    render() {

        return (
            <div>
                <p>Inventory</p>
                {Object.keys(this.props.fishes).map(this.renderInventory)}
                <AddFishForm addFish={this.props.addFish}/>
                <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
            </div>
        );
    }
}

Inventory.propTypes = {
    fishes: React.PropTypes.object.isRequired,
    updateFish: React.PropTypes.func.isRequired,
    removeFish: React.PropTypes.func.isRequired,
    addFish: React.PropTypes.func.isRequired,
    loadSamples: React.PropTypes.func.isRequired
}

export default Inventory;