import { Component, useState } from "react";
import { useRouter } from "next/router";
import { Alert, Spinner } from "reactstrap";
import List from "../components/List";
import Search from "../components/Search";
import LoaderSpiner from "../components/LoaderSpiner";

export default class Index extends Component() {
  componentDidMount() {
    fetch("https:/localhost:1337/api/documento/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ documentos: data });
      })
      .catch(console.log);

    return (
      <>
        <Search search={updateQuery} searchValue={query} />
        <List query={municipio.publicacao} search={query} />
      </>
    );
  }
}

/*

const GET_MUNICIPIO_PUBLICIACAO = gql`
  query ($id: ID!) {
    municipio(id: $id) {
      id
      nome
      publicacao(sort: "data_publicacao:desc") {
        id
        tipo
        descricao
        data_publicacao
        arquivo {
          url
        }
      }
    }
  }
`;

function Municipio(props) {
  const router = useRouter();
  const [query, updateQuery] = useState("");
  const { loading, error, data } = useQuery(GET_MUNICIPIO_PUBLICIACAO, {
    variables: { id: router.query.id_municipio },
  });
  if (error)
    return <Alert color="danger">{JSON.stringify(error, null, 2)}</Alert>;
  if (loading) return <LoaderSpiner />;
  if (data) {
    const { municipio } = data;
    return (
      <>
        <Search search={updateQuery} searchValue={query} />
        <List query={municipio.publicacao} search={query} />
      </>
    );
  }
}

export default Municipio;


*/
