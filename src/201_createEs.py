import elasticsearch
from elasticsearch import Elasticsearch, RequestsHttpConnection, helpers
import json
import hashlib

indexes = ["main"]

es = Elasticsearch(["https://site:1ff162746e60feac7c91c12d37cf0ca6@gimli-eu-west-1.searchly.com:443"])

actions = []

with open("/Users/nakamurasatoru/git/d_hi/dd/nishikie/src/data/data.json") as f:
    data = json.load(f)

map = {}
for obj in data:
    map[obj["@id"]] = obj

for item in data:

    uri = item["@id"]

    if "https://jpsearch.go.jp/term/property#accessInfo" not in item:
        continue

    id = "nishikie-"+uri.split("/")[-1]

    obj = {
        "_label": [item["http://www.w3.org/2000/01/rdf-schema#label"][0]["@value"]],
        "_thumbnail": [item["http://schema.org/image"][0]["@id"]],
        "_url" : ["https://hi-ut.github.io/ds/item/"+id],
    }

    if "@type" in item:
        obj["type"] = [item["@type"][0].split("/")[-1]]

    descs = []
    for m in item["http://schema.org/description"]:
        descs.append(m["@value"])
    obj["description"] = descs

    
    if "http://schema.org/about" in item:
        abouts = []
        for m in item["http://schema.org/about"]:
            abouts.append(m["@id"].split("/")[-1])
        obj["about"] = abouts

    source = map[item["https://jpsearch.go.jp/term/property#sourceInfo"][0]["@id"]]

    obj["source"] = [source["http://schema.org/provider"][0]["@id"].split("/")[-1]]

    access = map[item["https://jpsearch.go.jp/term/property#accessInfo"][0]["@id"]]

    obj["license"] = [access["http://schema.org/license"][0]["@id"]]

    manifests = []
    for m in access["http://schema.org/url"]:
        if "manifest" in m["@id"]:
            manifests.append(m["@id"])
    obj["manifest"] = manifests

    actions.append({
        "_index": "main",
        "_id": id,
        "_source" : obj
    })

with open("data/es.json", 'w') as outfile:
    json.dump(actions, outfile, ensure_ascii=False,
                indent=4, sort_keys=True, separators=(',', ': '))