## Description

Add a new service into this initialized spk project repository.

## Example

```bash
spk service create my-service . \
  --display-name $app_name \
  --helm-config-path $path_to_chart_in_repo \
  --helm-config-git $helm_repo_url \ # Needs to start with https and not contain user name
  --helm-config-branch master \
  --helm-chart-access-token-variable $ENV_VAR_NAME
```

## Note

- `--helm-chart-*` and `--helm-config-*` settings are mutually-exclusive. **You
  may only use one.**
  - If the git repository referenced in `--helm-config-git` is a private
    repository, you can specify an environment variable in your
    HLD-to-Materialized pipeline containing your a PAT to authenticate with via
    the `--helm-chart-access-token-variable` option.
- `--middlewares`, `--k8s-backend-port`, `--path-prefix`,
  `--path-prefix-major-version`, and `--k8s-backend` are all used to configure
  the generated Traefik2 IngressRoutes. i.e.

  ```sh
  spk service create my-example-documents-service path/to/my/service \
    --middlewares middleware \
    --k8s-backend-port 3001 \
    --k8s-backend docs-service \
    --path-prefix documents \
    --path-prefix-major-version v2
  ```

  will result in an IngressRoute that looks like:

  ```yaml
  apiVersion: traefik.containo.us/v1alpha1
  kind: IngressRoute
  metadata:
    name: my-example-documents-service-master
  spec:
    routes:
      - kind: Rule
        match: "PathPrefix(`/v2/documents`) && Headers(`Ring`, `master`)"
        middlewares:
          - name: my-example-documents-service-master
          - name: middlewareA
        services:
          - name: docs-service
            port: 3001
  ```
