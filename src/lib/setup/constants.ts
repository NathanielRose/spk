export interface RequestContext {
  orgName: string;
  projectName: string;
  accessToken: string;
  workspace: string;
  acrName?: string;
  storageAccountName?: string;
  storageTableName?: string;
  storageAccountAccessKey?: string;
  toCreateAppRepo?: boolean;
  toCreateSP?: boolean;
  createdProject?: boolean;
  scaffoldHLD?: boolean;
  scaffoldManifest?: boolean;
  scaffoldHelm?: boolean;
  scaffoldAppService?: boolean;
  createdHLDtoManifestPipeline?: boolean;
  createdLifecyclePipeline?: boolean;
  createdBuildPipeline?: boolean;
  createServicePrincipal?: boolean;
  createdStorageAccount?: boolean;
  createdStorageTable?: boolean;
  servicePrincipalId?: string;
  servicePrincipalPassword?: string;
  servicePrincipalTenantId?: string;
  subscriptionId?: string;
  createdResourceGroup?: boolean;
  createdACR?: boolean;
  error?: string;
}

export const MANIFEST_REPO = "quick-start-manifest";
export const HLD_REPO = "quick-start-hld";
export const HELM_REPO = "quick-start-helm";
export const APP_REPO = "quick-start-app";
export const DEFAULT_PROJECT_NAME = "BedrockRocks";
export const APP_REPO_LIFECYCLE = "quick-start-lifecycle";
export const WORKSPACE = "quick-start-env";
export const SP_USER_NAME = "service_account";
export const RESOURCE_GROUP = "quick-start-rg";
export const RESOURCE_GROUP_LOCATION = "westus2";
export const ACR_NAME = "quickStartACR";
export const VARIABLE_GROUP = "quick-start-vg";
export const APP_REPO_BUILD = "quick-start-app-build";
export const STORAGE_ACCOUNT_NAME = "quickstartstore";
export const STORAGE_TABLE_NAME = "quickstartstoragetable";
export const STORAGE_PARTITION_KEY = "quick-start-part-key";
export const SETUP_LOG = "setup.log";

export const HLD_DEFAULT_COMPONENT_NAME = "traefik2";
export const HLD_DEFAULT_DEF_PATH = "definitions/traefik2";
