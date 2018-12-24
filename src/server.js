import schema from "./schema/schema";
import express from "express";
import expressGraphQL from "express-graphql";

let app = new express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true,
}));

app.listen(4000, () => {
    console.log('Listening');
});
