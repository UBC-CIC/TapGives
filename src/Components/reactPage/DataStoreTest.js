import React from "react";
import {DataStore} from "aws-amplify";
import {Language} from "../../models";
import {Button} from "@material-ui/core";


class DataStoreTest extends React.Component {

    async componentDidMount() {
        try {
            await DataStore.save(
                new Language({
                    id: "en",
                    language: "English"
                })
            );
            console.log("Post saved successfully!");
        } catch (error) {
            console.log("Error saving post", error);
        }
        try {
            const posts = await DataStore.query(Language);
            console.log("Posts retrieved successfully!", JSON.stringify(posts, null, 2));
        } catch (error) {
            console.log("Error retrieving posts", error);
        }

    }
    async clearDataStore () {
        try {
            await DataStore.clear()
            const posts = await DataStore.query(Language);
            console.log("Posts retrieved successfully!", JSON.stringify(posts, null, 2));
        } catch (error) {
            console.log("Error retrieving posts", error);
        }
    }

    async downloadData() {

    }

    async syncData() {
        await DataStore.stop()
        await DataStore.start()
    }

    render() {
        return(<div>
            <div>
                This should be the dataStore test
            </div>
            <Button variant="outlined" onClick={this.clearDataStore.bind(this)}>
                Clear DataStore
            </Button>
            <Button variant="outlined" onClick={this.downloadData.bind(this)}>
                Download from cloud
            </Button>
            <Button variant="outlined" onClick={this.syncData.bind(this)}>
                Sync to cloud
            </Button>
        </div>)
    }
}

export default DataStoreTest